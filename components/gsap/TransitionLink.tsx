'use client'

import { useTransition } from '@/components/gsap/PageTransitionProvider'
import { type AnchorHTMLAttributes } from 'react'

interface TransitionLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
}

export function TransitionLink({ href, children, onClick, ...props }: TransitionLinkProps) {
  const { navigateTo } = useTransition()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const isExternal = href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel')
    const isAnchor = href.startsWith('#')
    const isNewTab = props.target === '_blank'
    const isModified = e.metaKey || e.ctrlKey || e.shiftKey || e.altKey

    if (isExternal || isNewTab || isModified || isAnchor) return

    e.preventDefault()
    onClick?.(e)
    navigateTo(href)
  }

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  )
}