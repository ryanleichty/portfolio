import { motion } from 'framer-motion'
import { clsx } from 'clsx'

import MaxWidthWrapper from '@components/MaxWidthWrapper'
import TrimText from '@components/TrimText'

const motionParent = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.2,
    },
  },
}

const motionChild = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
}

export default function PageBanner({
  title,
  children,
  className,
  ...props
}: {
  title: string
  children?: React.ReactNode
  className?: string
  [key: string]: any
}) {
  return (
    <MaxWidthWrapper className={clsx('border-b border-black', className)} {...props}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={motionParent}
        className="flex min-h-screen-no-header flex-col items-center justify-between gap-16 py-12 text-center md:py-16"
      >
        <motion.h1
          variants={motionChild}
          className="font-serif text-4xl italic sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl"
        >
          <TrimText top={0} bottom={-0.15} x={-0.075}>
            {title}
          </TrimText>
        </motion.h1>
        <motion.p variants={motionChild} className="max-w-lg text-sm sm:text-base lg:text-lg">
          <TrimText top={-0.25} bottom={-0.25} x={-0.075}>
            {children}
          </TrimText>
        </motion.p>
      </motion.div>
    </MaxWidthWrapper>
  )
}
