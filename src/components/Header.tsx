import { FC } from 'react'
import HeaderLink from './HeaderLink';
import { Explore, Group, OndemandVideoSharp, BusinessCenter, GroupAdd } from '@mui/icons-material';
import Image from 'next/image';
import {signIn} from 'next-auth/react'

interface HeaderProps {
  
}

const Header: FC<HeaderProps> = ({}) => {
  return <div>
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
                onClick={() => {console.log('tryiing');signIn("google")}}
                >
                    Sign In
                </button>
            </div>
        </div>
      </header>
  </div>
}

export default Header