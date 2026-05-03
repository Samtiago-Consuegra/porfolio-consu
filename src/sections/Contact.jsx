import PixelBackground from '../components/ui/PixelBackground';
import { cn } from '../utils/utils';

import { FontAwesomeIcon, faEnvelope } from "../utils/icons";

export default function Contact({
    title = 'Estemos en contacto',
    salesEmail = 'sconsuegrabravo@gmail.com',
    className,
}) {
    return (
        <section id="contact" className='bg-[#0a0a0a] pb-[max(1rem,env(safe-area-inset-bottom))]'>

            <div className={cn('mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-16', className)}>
                <div className='relative rounded-xl border border-white'>
                    <div className='absolute left-1/2 top-0 z-10 max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 rounded-xl border bg-white px-3 py-1 sm:px-4'>
                        <span className='text-sm font-medium text-zinc-900'>Contacto</span>
                    </div>

                    <div
                        className='absolute inset-x-0 top-0 h-1/2 rounded-t-xl overflow-hidden'
                        style={{
                            maskImage: 'linear-gradient(to bottom, black, transparent)',
                            WebkitMaskImage: 'linear-gradient(to bottom, black, transparent)',
                        }}
                    >
                        <PixelBackground
                            gap={6}
                            speed={60}
                            colors='#1a1a1a,#2a2a2a,#333333,#111111,#d4d4d4,#e5e5e5,#c4c4c4,#bababa'
                            opacity={1}
                            direction='top'
                            className='w-full h-full absolute inset-0'
                        />
                    </div>

                    <div className='relative flex flex-col items-center gap-5 px-4 pb-8 pt-14 text-center sm:gap-6 sm:px-8 sm:pb-10 sm:pt-16 md:px-10'>
                        <div className='flex flex-col items-center gap-5 text-white sm:gap-6'>
                            <h2 className='text-2xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
                                {title}
                            </h2>
                            <p className='mx-auto flex max-w-lg flex-wrap items-center justify-center gap-2 text-balance rounded-md border border-white px-3 py-2 text-sm text-zinc-200 sm:px-4 sm:text-base'>
                                <FontAwesomeIcon icon={faEnvelope} className="shrink-0" />
                                <span className="break-all sm:break-normal">{salesEmail}</span>
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}