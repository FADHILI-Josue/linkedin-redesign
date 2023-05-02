import HeaderLink from '@/components/HeaderLink';
import { BusinessCenter, Explore, GroupAdd, OndemandVideoSharp } from '@mui/icons-material';
import Image from 'next/image';
import { FC } from 'react'

interface homeProps {
  
}

const home: FC<homeProps> = ({}) => {
  return <div className='min-h-screen bg-gray-100 space-x-10 relative'>
     <header className="flex justify-around py-4">
        <div className="relative w-36 h-10 flex items-center">
            <Image src='/linkedinlogo.png' alt={"image"} width={300} height={900} className='object-contain'/>
        </div>
        <div className="flex items-center sm:divide-x divide-grey-300">
            <div className="hidden sm:flex space-x-8 pr-4 items-center">
            <HeaderLink Icon={Explore} text="Discover" />
            <HeaderLink Icon={GroupAdd} text="People" />
            <HeaderLink Icon={OndemandVideoSharp} text="Learning" />
            <HeaderLink Icon={BusinessCenter} text="Jobs" />
            </div>
            <div className="pl-4">
                <button className="font-semibold flex items-center justify-center text-blue-700 rounded-full py-1.5 px-5 border transition-all border-blue-700 hover:border-2"
                onClick={() => {console.log('tryiing')}}
                >
                    Sign In
                </button>
            </div>
        </div>
      </header>
      <main className="flex flex-col xl:flex-row items-center max-w-screen-lg mx-auto">
        <div className="space-y-6 xl:space-y-10">
            <h1 className="text-3xl md:text-5xl text-amber-800/80 max-w-xl !leading-snug md:p-0">welcome to your proffesional community</h1>
            <div className="space-y-4">
                <div className="intent">
                    <h2 className="text-lg">search for a job</h2>
                    <div>&gt;</div>
                </div>
                <div className="intent">
                    <h2 className="text-lg">Find a person you know</h2>
                    <div>&gt;</div>
                </div>
                <div className="intent">
                    <h2 className="text-lg">Learn a new skill</h2>
                    <div>&gt;</div>
                </div>
            </div>
        </div>

        <div className="relative xl:absolute w-80 h-80 xl:w-[650px] xl:h-[650px] xl:top-14 xl:right-5">
            <Image src="/linked.png" alt="this is the image" layout="fill" objectFit="contain" priority/>
        </div>
      </main>
  </div>
}

export default home