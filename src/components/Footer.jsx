import { footerLinks, socialIcons } from '../constants/data'
import { MdLocationPin } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { SiMinutemailer } from "react-icons/si";

const Footer = () => {
  return (
    <footer className='bg-[rgb(0,31,63)] text-white pt-20 px-10 font-bodyText w-full'>
        <div className='flex flex-col justify-between gap-y-4 xl:flex-row xl:gap-y-0 '>
            <div className='w-full md:w-1/2 xl:w-1/4'>
                <h3 className='text-4xl pb-5'>BellPoint Pathway</h3>
                <p className='text-gray-400'>Far far away, behind the doors to global education, lies your bright future.</p>
                <div className='flex items-center gap-x-5 pt-5'>
                    {socialIcons.map((icon) => (
                        <div className='w-16 h-16 md:w-20 md:h-20 lg:w-14 lg:h-14 rounded-full bg-gray-400 flex justify-center items-center cursor-pointer' key={icon.name}>
                           {<icon.icon size={20} className="text-[#001F3F]"/>}
                        </div>
                    ))}
                </div>
            </div>
            {footerLinks.map((item) => (
                <div className='' key={item.category}>
                    <h3 className='text-2xl pb-5'>{item.category}</h3>
                    <ul>
                        {item.links.map((link) => (
                            <li key={link.id} className='text-gray-400 my-2 cursor-pointer'>{link.name}</li>
                        ))}
                    </ul>
                </div>
            ))}
            <div>
                <h3 className='text-2xl pb-5'>Have Questions?</h3>
                <div className='flex items-start gap-x-2 mb-2'>
                    <MdLocationPin size={24} />
                    <p className='text-gray-400'>123 BellPoint Avenue, Pathway City,<br /> Global Edu-State, World</p>
                </div>
                <div className='flex items-center gap-x-2 mt-5'>
                    <FaPhone />
                    <p className='text-gray-400'>+1 (234) 567-8910</p>
                </div>
                <div className='flex items-center gap-x-2 mt-5'>
                    <SiMinutemailer />
                    <p className='text-gray-400'>info@bellpointpathway.com</p>
                </div>
            </div>
        </div>
        <p className='text-white pt-12 text-center'>© 2024 All Rights Reserved | Designed by BellPoint Design Team</p>
    </footer>
  )
}

export default Footer