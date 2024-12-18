
const VideoInfo = ({title,overview}) => {

 return (
    <div className="w-screen aspect-video pt-80 px-12 text-white  absolute bg-gradient-to-r from-black">
       <h1 className="text-5xl font-bold p-2">{title}</h1>
        <p className="w-1/4 text-lg py-6 my-3">{overview}</p>

        <div className=""> 
            <button className="px-8 p-3 bg-white text-black text-lg mx-2 rounded-md hover:opacity-50 ">▶️ Pay</button>
            <button className="px-8 p-3 bg-white text-black text-lg mx-2 rounded-md">More Info</button>
        </div>
       </div>
  )
}

export default VideoInfo