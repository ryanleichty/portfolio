import { useState } from 'react'
import {
  SandpackProvider,
  SandpackCodeEditor,
  SandpackPreview,
  SandpackConsole,
  SandpackThemeProp,
  UnstyledOpenInCodeSandboxButton,
  useSandpack,
  useSandpackNavigation,
} from '@codesandbox/sandpack-react'
import { motion } from 'framer-motion'
import { Box, RotateCw } from 'react-feather'
import clsx from 'clsx'

function ActiveFile() {
  const { sandpack } = useSandpack()
  const { activeFile } = sandpack

  return <h1 className="text-gray-400">{activeFile}</h1>
}

function RefreshButton({ className }: { className: string }) {
  const { refresh } = useSandpackNavigation()
  const [rotation, setRotation] = useState(360)

  function handleClick() {
    setRotation(rotation + 360)
    refresh()
  }

  return (
    <motion.button
      type="button"
      onClick={handleClick}
      className={clsx(
        className,
        'grid h-8 w-8 place-items-center text-gray-400 transition-colors hover:text-gray-200'
      )}
      whileHover={{ rotate: 180 }}
      animate={{ '--rotate': `${rotation}deg` } as any}
      transition={{ duration: 0.4 }}
    >
      <span className="sr-only">Refresh code editor</span>
      <motion.span style={{ rotate: 'var(--rotate)' }}>
        <RotateCw className="h-5 w-5" />
      </motion.span>
    </motion.button>
  )
}

const customTheme: SandpackThemeProp = {
  colors: {
    // Surface
    surface1: 'hsl(var(--color-black))',
    surface2: 'hsl(var(--color-gray-900))',
    surface3: '#2F2F2F',

    // UI
    disabled: '#4D4D4D',
    clickable: 'hsl(var(--color-gray-600))',
    base: 'hsl(var(--color-gray-400))',
    hover: 'hsl(var(--color-gray-200))',

    // Brand
    accent: 'hsl(var(--color-gray-200))',

    // Feedbacks
    error: '#E1CFF8',
    errorSurface: '#b08df8',
  },
  syntax: {
    plain: '#f0fdaf',
    comment: {
      color: '#757575',
      fontStyle: 'italic',
    },
    keyword: '#e5fd78',
    tag: '#f0fdaf',
    punctuation: '#ffffff',
    definition: '#eeeeee',
    property: '#90e86f',
    static: '#ffffff',
    string: '#dafecf',
  },
  font: {
    body: 'var(--font-mabry), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    mono: '"Fira Mono", "DejaVu Sans Mono", Menlo, Consolas, "Liberation Mono", Monaco, "Lucida Console", monospace',
    size: '16px',
    lineHeight: '1.5',
  },
}

const fileApp = `\
import Button from './Button'

export default function App() {
  return (
    <>
      <h1>Hello, world!</h1>
      <Button>Button</Button>
    </>
  )
}
`

const fileButton = `\
export default function Button({ children }) {
  return (
    <button>{children}</button>
  )
}
`

type Props = {
  height?: string
}

export default function Sandbox({ height = '480px' }: Props) {
  const [previewIsVisible, setPreviewIsVisible] = useState(true)

  return (
    <div className="overflow-hidden rounded-md bg-black text-gray-400">
      <style>{`.sp-tab-button { height: 48px; }`}</style>
      <SandpackProvider
        template="react"
        files={{
          '/App.js': fileApp,
          '/Button.js': fileButton,
          'tailwind.config.js': {
            code: `\
            module.exports = {
              content: ["./src/**/*.{html,js}"],
              theme: {
                extend: {},
              },
              plugins: [],
            }`,
            hidden: true,
          },
        }}
        theme={customTheme}
        customSetup={{
          dependencies: {
            tailwindcss: '^3.2.4',
          },
        }}
      >
        <div className="flex h-12 items-center justify-between gap-4 border-b border-gray-900 px-4">
          <ActiveFile />
          <div className="-mr-[6px] flex">
            <UnstyledOpenInCodeSandboxButton className="grid h-8 w-8 place-items-center">
              <span className="sr-only">Open in CodeSandbox</span>
              <Box className="h-5 w-5" />
            </UnstyledOpenInCodeSandboxButton>
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="flex-1 border-r border-gray-900">
            <SandpackCodeEditor
              style={{ height: height }}
              showTabs
              showLineNumbers={false}
              wrapContent
            />
          </div>
          <div className="flex flex-1 flex-col">
            <div className="border-b border-gray-900">
              <div className="-mb-[1px] flex items-center px-2">
                <button
                  onClick={() => {
                    setPreviewIsVisible(true)
                  }}
                  className={`h-12 border-b px-2 text-gray-400 ${
                    previewIsVisible
                      ? 'border-[var(--sp-syntax-color-keyword)]'
                      : 'border-transparent'
                  }`}
                >
                  Result
                </button>
                <button
                  onClick={() => {
                    setPreviewIsVisible(false)
                  }}
                  className={`h-12 border-b px-2 text-gray-400 ${
                    previewIsVisible
                      ? 'border-transparent'
                      : 'border-[var(--sp-syntax-color-keyword)]'
                  }`}
                >
                  Console
                </button>
                <RefreshButton className="ml-auto" />
              </div>
            </div>
            <div className="relative flex-1 rounded p-4">
              <div className="h-full overflow-hidden rounded">
                <SandpackPreview
                  showOpenInCodeSandbox={false}
                  showRefreshButton={false}
                  style={{ height: '100%' }}
                />
                <div
                  className={`absolute inset-0 z-10 p-4 transition-opacity ${
                    previewIsVisible ? 'pointer-events-none opacity-0' : ''
                  }`}
                >
                  <SandpackConsole style={{ height: '100%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </SandpackProvider>
    </div>
  )
}
