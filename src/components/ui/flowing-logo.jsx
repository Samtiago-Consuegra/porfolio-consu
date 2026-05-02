import { cn } from "../../utils/utils";

const FlowingLogo = ({
    children,
    vertical = false,
    repeat = 4,
    pauseOnHover = false,
    reverse = false,
    className = '',
    applyMask = true,
    ...props
}) => (
    <div
        {...props}
        className={cn(
            'group relative flex h-full w-full overflow-hidden p-4 items-center justify-center gap-3 bg-[#0a0a0a]',
            vertical ? 'flex-col' : 'flex-row',
            className
        )}
        style={{ '--duration': '10s', '--gap': '12px' }}
    >
        {Array.from({ length: repeat }).map((_, index) => (
            <div
                key={`item-${index}`}
                className={cn(
                    'flex shrink-0 gap-3',
                    pauseOnHover && 'group-hover:[animation-play-state:paused]',
                    reverse && '[animation-direction:reverse]',
                    !vertical ? 'animate-canopy-horizontal flex-row' : 'animate-canopy-vertical flex-col'
                )}
            >
                {children}
            </div>
        ))}
        {applyMask && (
            <div
                className={cn(
                    'pointer-events-none absolute inset-0 z-10 h-full w-full',
                    vertical ? 'bg-gradient-to-b' : 'bg-gradient-to-r',
                    'from-white via-transparent to-white dark:from-[#0a0a0a] dark:to-[#0a0a0a]'
                )}
            />
        )}
    </div>
);

const LogoCard = ({
    logo,
    className = '',
    variant = 'square',
}) => (
    <div
        className={cn(
            'flex items-center justify-center shrink-0 cursor-pointer overflow-hidden hover:scale-110 rounded-xl border border-transparent transition-all hover:border-yellow-400 dark:hover:border-yellow-400',
            variant === 'square' && 'h-16 w-16',
            variant === 'wide' && 'h-14 w-auto px-5 py-3 min-w-20 max-w-[220px]',
            variant === 'auto' && 'h-auto w-auto p-2',
            className
        )}
    >
        {typeof logo.image === 'string' ? (
            <img
                src={logo.image}
                alt={logo.name}
                className={cn(
                    'rounded-xl',
                    variant === 'square' && 'h-full w-full object-cover',
                    variant === 'wide' && 'h-full w-auto object-contain max-h-8',
                    variant === 'auto' && 'max-h-12 w-auto object-contain'
                )}
            />
        ) : (
            <span className="text-5xl text-white flex items-center justify-center h-full w-full [&_svg]:fill-current [&_svg]:text-current">
                {logo.image}
            </span>
        )}
    </div>
);

export const FlowingLogos = ({
    data,
    className = '',
    cardClassName = '',
    variant = 'square',
}) => (
    <div className={cn('w-full overflow-hidden', className)}>
        <FlowingLogo className="[--duration:30s]" pauseOnHover applyMask repeat={9}>
            {data.map((logo) => (
                <LogoCard
                    key={logo.name}
                    logo={logo}
                    variant={variant}
                    className={cardClassName}
                />
            ))}
        </FlowingLogo>
    </div>
);