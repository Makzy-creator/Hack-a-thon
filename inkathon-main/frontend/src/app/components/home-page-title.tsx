import Image from 'next/image'
import Link from 'next/link'
import { AnchorHTMLAttributes, FC } from 'react'

import githubIcon from 'public/icons/github-button.svg'
import whatsappIcon from 'public/icons/whatsapp-button.svg'
import vercelIcon from 'public/icons/vercel-button.svg'

import { cn } from '@/utils/cn'

interface StyledIconLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  className?: string
}

const StyledIconLink: React.FC<StyledIconLinkProps> = ({ className, children, ...rest }) => (
  <Link
    className={cn(
      'group opacity-90 transition-all hover:-translate-y-0.5 hover:opacity-100',
      className,
    )}
    {...rest}
  >
    {children}
  </Link>
)

export const HomePageTitle: FC = () => {
  const title = 'Hack-a-thon'
  const desc = 'Hack-a-thon is a template to guide individual hackers build dApps with Polkadot'
  const githubHref = 'https://github.com/Makzy-creator'
  const deployHref = 'https://github.com/scio-labs/inkathon#deployment-'
  const telegramHref = 'https://t.me/inkathon'

  return (
    <>
      <div className="flex flex-col items-center text-center font-mono">
        {/* Logo & Title */}
        <Link
          href={githubHref}
          target="_blank"
          // className="group"
          className="group flex cursor-pointer items-center gap-4 rounded-3xl px-3.5 py-1.5 transition-all"
        >
          {/* <Image src={inkathonLogo} priority width={60} alt="ink!athon Logo" /> */}
          <h1 className="text-[2.5rem] font-black tracking-tighter">{title}</h1>
        </Link>

        {/* Tagline & Links */}
        <p className="mb-2 mt-4 text-[#6b21a8]">{desc}</p>
        <p className="mb-8 text-xs text-gray-600">
          Built by{' '}
          <a
            href="https://github.com/Makzy-creator"
            target="_blank"
            className="font-semibold text-gray-600 hover:text-primary/90"
          >
            Dpriestess
          </a>{' '}
        </p>

        {/* Github & Vercel Buttons */}
        <div className="flex select-none space-x-2">
          <StyledIconLink href={githubHref} target="_blank">
            <Image src={githubIcon} priority height={32} alt="Github Repository" />
          </StyledIconLink>
          <StyledIconLink href={deployHref} target="_blank">
            <Image src={vercelIcon} priority height={32} alt="Deploy with Vercel" />
          </StyledIconLink>
          <StyledIconLink href={telegramHref} target="_blank">
            {/* <Image src={whatsAppIcon} priority height={32} alt="Telegram Group" /> */}
          </StyledIconLink>
        </div>
        <div className="my-14 h-[1px] w-[5rem] max-w-full bg-[#6b21a8]" />
      </div>
    </>
  )
}
