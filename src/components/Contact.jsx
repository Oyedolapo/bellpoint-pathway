import meeting from '../assets/meeting.webp';

const Contact = () => {
  return (
    <section className='relative bg-cover bg-center bg-fixed pt-28 px-5 lg:px-20' style={{ backgroundImage: `url(${meeting})`}}>
        <div className="absolute inset-0 bg-[#001f3f] opacity-50"></div>

        <form action="" className='relative font-bodyText w-full lg:w-full xl:w-1/2'>
            <h4 className='text-white text-center lg:text-left text-4xl font-semibold py-8'>Send a Message & Get in touch!</h4>
            <div className='flex flex-col lg:flex-row gap-10 py-5'>
                <input type="text" name="" id="" placeholder='Your Name' className='w-full lg:w-1/2 h-14 rounded outline-none px-3 text-black text-lg'/>
                <input type="email" name="" id="" placeholder='Your Email' className='w-full lg:w-1/2 h-14 rounded outline-none px-3 text-black text-lg'/>
            </div>
            <div className='py-5'>
                <select name="" id="" className='w-full h-14 rounded outline-none px-3 text-black text-xl'>
                    <option value="">Consultation</option>
                    <option value="">Consultation</option>
                    <option value="">Consultation</option>
                    <option value="">Consultation</option>
                </select>
            </div>
            <textarea name="" id="" placeholder='Message' className='w-full h-40 rounded outline-none px-3 py-3 text-black text-xl'></textarea>
            <button className='bg-[#001F3F] text-white px-3 py-5 rounded w-full mt-4 mb-8'>Send a Message</button>
        </form>
    </section>
  )
}

export default Contact