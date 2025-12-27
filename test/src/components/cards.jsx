import React from 'react'

const cards = ({user}) => {
    return (
       
            <div className='w-[300px] h-[auto]  rounded-xl bg-red-700 flex flex-col p-2 justify-between'>
                <div className='w-full h-[140px] bg-cover rounded-lg object-cover bg-center 'style={{ backgroundImage: `url(${user.coverPhoto})` }}>
                </div>
                <div className=' rounded-[50%] w-[70px] h-[70px] border-2 border-white relative top-[-30px] left-4 bg-cover bg-center object-cover'style={{ backgroundImage: `url(${user.profilePhoto})` }}>

                </div>
                <div className='items-left  justify-start w-[280px] flex flex-col gap-2 mt-[-2px] ml-4 p-10px'>
                    <h2 className='text-white font-bold text-3xl'>
                        {user.fullname}</h2>
                    <h3 className='text-white w-[80%]'>
                        {user.about}</h3>
                    <p className="text-white text-sm">
                        {user.follow ? "Following" : "Follow"}
                    </p>

                </div>
                <div className='w-[280px] h-[60px] bg-white rounded-lg flex items-center justify-evenly  mt-2'>
                    <div className='cardlikes'>
                        <div className='flex flex-col gap-[2px]'>
                            <h1>+{user.likesCount}</h1>
                            <h1>+{user.likesCount}</h1>

                        </div>
                    </div>
                    <div className='cardpost'>
                        <div className='flex flex-col gap-[2px]'>
                            <h1>+{user.postCount}</h1>
                            <h1>+{user.postCount}</h1>
                        </div>
                    </div>
                    <div className='cardview'>
                        <div className='cardviewnum flex flex-col gap-[2px]'>
                            <h1>{user.viewCount}</h1>
                            <h1>{user.viewCount}</h1>
                        </div>
                    </div>

                </div>
            </div>
       
    )
}

export default cards