import PixelBackground from '../components/ui/PixelBackground';
import { cn } from '../utils/utils';

import { FontAwesomeIcon, faEnvelope } from "../utils/icons";

export default function Contact({
    title = 'Estemos en contacto',
    salesEmail = 'sconsuegrabravo@gmail.com',
    className,
}) {
    return (
        <section id="contact" className='bg-[#0a0a0a]'>

            <div className={cn('max-w-2xl mx-auto px-4 py-16', className)}>
                <div className='border border-white rounded-xl relative'>
                    <div className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 border bg-white z-10 rounded-xl px-4 py-1 whitespace-nowrap'>
                        <span className='text-background text-sm font-medium'>Contacto</span>
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

                    <div className='relative flex flex-col items-center gap-6 text-center pt-16 pb-10 px-10'>
                        <div className='flex flex-col items-center gap-6 text-white'>
                            <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
                                {title}
                            </h2>
                            <p className='mx-auto max-w-lg text-muted-foreground text-balance border border-white rounded-md px-4 py-2 gap-2 flex items-center justify-center'>
                                <FontAwesomeIcon icon={faEnvelope} /> {salesEmail}
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}