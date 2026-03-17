import clsx from 'clsx'

interface SectionLabelProps {
  tag?: string
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean
  className?: string
}

export default function SectionLabel({
  tag,
  title,
  subtitle,
  centered = true,
  light = false,
  className,
}: SectionLabelProps) {
  return (
    <div className={clsx(centered && 'text-center', className)}>
      {tag && (
        <span className={clsx(
          'inline-block mb-3 px-3 py-1 text-xs font-semibold uppercase tracking-widest rounded-full',
          light ? 'bg-white/20 text-white' : 'bg-teal-50 text-teal-600 border border-teal-100'
        )}>
          {tag}
        </span>
      )}
      <h2 className={clsx(
        'font-display font-bold text-balance leading-tight',
        'text-3xl sm:text-4xl lg:text-[2.75rem]',
        centered ? 'max-w-3xl mx-auto' : 'max-w-2xl',
        light ? 'text-white' : 'text-navy-700'
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={clsx(
          'mt-4 text-lg leading-relaxed',
          centered ? 'max-w-2xl mx-auto' : 'max-w-xl',
          light ? 'text-white/70' : 'text-csb-gray'
        )}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
