import { useState, useEffect } from 'react'

const getCurrentDateTime = () => {
    const date = new Date()

    // Get the day of the week
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const dayName = days[date.getDay()]

    // Get the day of the month
    const day = date.getDate()

    // Get the month
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const monthName = months[date.getMonth()]

    // Get the hours and format them to 12-hour format
    let hours = date.getHours()
    const minutes = date.getMinutes().toString().padStart(2, '0')
    const ampm = hours >= 12 ? 'PM' : 'AM'
    hours = hours % 12
    hours = hours ? hours : 12 // The hour '0' should be '12'

    return `${dayName} ${day}. ${monthName} ${hours}:${minutes} ${ampm}`
}


export default function Header() {
    const [dateTime, setDateTime] = useState(getCurrentDateTime())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDateTime(getCurrentDateTime())
        }, 60000) // Update every minute

        return () => clearInterval(intervalId)
    }, [])
    return (
        <>
            <div className="fixed top-0 left-0 w-full h-[4.5dvh] flex justify-center items-center bg-[rgba(0,0,0,0.3)] backdrop-blur-[.3rem] border-b-[2px] border-gray-500">
                <div className="w-full h-full max-w-[95rem] flex justify-between items-center">
                    <div className="flex justify-start items-center gap-[1rem]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-white scale-[.85] flex justify-center items-center"><path d="M19.665 16.811a10.316 10.316 0 0 1-1.021 1.837c-.537.767-.978 1.297-1.316 1.592-.525.482-1.089.73-1.692.744-.432 0-.954-.123-1.562-.373-.61-.249-1.17-.371-1.683-.371-.537 0-1.113.122-1.73.371-.616.25-1.114.381-1.495.393-.577.025-1.154-.229-1.729-.764-.367-.32-.826-.87-1.377-1.648-.59-.829-1.075-1.794-1.455-2.891-.407-1.187-.611-2.335-.611-3.447 0-1.273.275-2.372.826-3.292a4.857 4.857 0 0 1 1.73-1.751 4.65 4.65 0 0 1 2.34-.662c.46 0 1.063.142 1.81.422s1.227.422 1.436.422c.158 0 .689-.167 1.593-.498.853-.307 1.573-.434 2.163-.384 1.6.129 2.801.759 3.6 1.895-1.43.867-2.137 2.08-2.123 3.637.012 1.213.453 2.222 1.317 3.023a4.33 4.33 0 0 0 1.315.863c-.106.307-.218.6-.336.882zM15.998 2.38c0 .95-.348 1.838-1.039 2.659-.836.976-1.846 1.541-2.941 1.452a2.955 2.955 0 0 1-.021-.36c0-.913.396-1.889 1.103-2.688.352-.404.8-.741 1.343-1.009.542-.264 1.054-.41 1.536-.435.013.128.019.255.019.381z"></path></svg>
                        <h1 className="text-white font-[600] text-[.9rem]">
                            Finder
                        </h1>
                        <h1 className="text-white font-[400] text-[.9rem]">
                            File
                        </h1>
                        <h1 className="text-white font-[400] text-[.9rem]">
                            Edit
                        </h1>
                        <h1 className="text-white font-[400] text-[.9rem]">
                            View
                        </h1>
                        <h1 className="text-white font-[400] text-[.9rem]">
                            Go
                        </h1>
                        <h1 className="text-white font-[400] text-[.9rem]">
                            Window
                        </h1>
                        <h1 className="text-white font-[400] text-[.9rem]">
                            Help
                        </h1>
                    </div>
                    <div className="flex gap-[.2rem]">
                        <svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_dd_202_1873)">
                                <path d="M11.7295 17.4028H19.2705C19.7699 17.4028 20.2248 17.2928 20.6353 17.0728C21.0457 16.8569 21.3716 16.5522 21.6128 16.1587C21.8582 15.7694 21.981 15.3145 21.981 14.7939C21.981 14.2734 21.8582 13.8185 21.6128 13.4292C21.3716 13.0356 21.0457 12.731 20.6353 12.5151C20.2248 12.2951 19.7699 12.1851 19.2705 12.1851H11.7295C11.2259 12.1851 10.7689 12.2951 10.3584 12.5151C9.94792 12.731 9.61995 13.0356 9.37451 13.4292C9.1333 13.8185 9.0127 14.2734 9.0127 14.7939C9.0127 15.3145 9.1333 15.7694 9.37451 16.1587C9.61995 16.5522 9.94792 16.8569 10.3584 17.0728C10.7689 17.2928 11.2259 17.4028 11.7295 17.4028ZM19.4292 16.4443C19.1245 16.4401 18.8473 16.3639 18.5977 16.2158C18.3522 16.0677 18.1554 15.8688 18.0073 15.6191C17.8592 15.3695 17.7852 15.0923 17.7852 14.7876C17.7852 14.4871 17.8592 14.2121 18.0073 13.9624C18.1554 13.7127 18.3522 13.5138 18.5977 13.3657C18.8473 13.2176 19.1245 13.1436 19.4292 13.1436C19.7339 13.1436 20.0111 13.2176 20.2607 13.3657C20.5146 13.5138 20.7157 13.7127 20.8638 13.9624C21.0119 14.2078 21.0838 14.4808 21.0796 14.7812C21.0796 15.0859 21.0055 15.3652 20.8574 15.6191C20.7093 15.873 20.5104 16.0741 20.2607 16.2222C20.0111 16.3703 19.7339 16.4443 19.4292 16.4443ZM11.9897 11.2075H19.0103C19.5562 11.2075 20.0534 11.0869 20.502 10.8457C20.9548 10.6045 21.3145 10.266 21.5811 9.83008C21.8477 9.39421 21.981 8.88851 21.981 8.31299C21.981 7.73747 21.8477 7.23177 21.5811 6.7959C21.3145 6.36003 20.9548 6.02148 20.502 5.78027C20.0534 5.53906 19.5562 5.41846 19.0103 5.41846H11.9897C11.4438 5.41846 10.9445 5.53906 10.4917 5.78027C10.0431 6.02148 9.68343 6.36003 9.4126 6.7959C9.146 7.23177 9.0127 7.73747 9.0127 8.31299C9.0127 8.88851 9.146 9.39421 9.4126 9.83008C9.68343 10.266 10.0431 10.6045 10.4917 10.8457C10.9445 11.0869 11.4438 11.2075 11.9897 11.2075ZM11.9897 10.249C11.6343 10.249 11.3021 10.1686 10.9932 10.0078C10.6885 9.84277 10.4409 9.61637 10.2505 9.32861C10.0643 9.03662 9.97119 8.69808 9.97119 8.31299C9.97119 7.9279 10.0643 7.59147 10.2505 7.30371C10.4409 7.01172 10.6885 6.78532 10.9932 6.62451C11.3021 6.45947 11.6343 6.37695 11.9897 6.37695H19.0103C19.3615 6.37695 19.6895 6.45947 19.9941 6.62451C20.3031 6.78532 20.5506 7.01172 20.7368 7.30371C20.9272 7.59147 21.0225 7.9279 21.0225 8.31299C21.0225 8.69808 20.9272 9.03662 20.7368 9.32861C20.5506 9.61637 20.3031 9.84277 19.9941 10.0078C19.6895 10.1686 19.3615 10.249 19.0103 10.249H11.9897ZM11.9897 9.81738C12.269 9.82161 12.5208 9.75602 12.7451 9.62061C12.9736 9.48096 13.1556 9.29688 13.291 9.06836C13.4307 8.83561 13.5005 8.57959 13.5005 8.30029C13.5047 8.021 13.4391 7.76921 13.3037 7.54492C13.1683 7.31641 12.9842 7.13656 12.7515 7.00537C12.5229 6.86995 12.269 6.80225 11.9897 6.80225C11.7104 6.80225 11.4565 6.86995 11.228 7.00537C10.9995 7.14079 10.8175 7.32275 10.6821 7.55127C10.5509 7.77979 10.4854 8.03158 10.4854 8.30664C10.4854 8.58594 10.5509 8.83984 10.6821 9.06836C10.8175 9.29688 10.9995 9.47884 11.228 9.61426C11.4565 9.74967 11.7104 9.81738 11.9897 9.81738Z" fill="white" />
                            </g>
                            <defs>
                                <filter id="filter0_dd_202_1873" x="6.01172" y="3.41846" width="18.9688" height="17.9844" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dy="1" />
                                    <feGaussianBlur stdDeviation="1.5" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_202_1873" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dy="0.5" />
                                    <feGaussianBlur stdDeviation="0.5" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                                    <feBlend mode="normal" in2="effect1_dropShadow_202_1873" result="effect2_dropShadow_202_1873" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_202_1873" result="shape" />
                                </filter>
                            </defs>
                        </svg>
                        <h1 className='text-white font-[400] text-[.9rem]'>
                            {dateTime}
                        </h1>
                    </div>
                </div>
            </div>
        </>
    )
}
