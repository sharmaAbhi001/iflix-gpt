
const VideoInfo = ({title,overview}) => {

 return (
    <div className="pt-80 mx-32">
        <h1 className="text-5xl font-bold p-2">{title}</h1>
        <p className="w-1/4 text-lg py-6 my-3">{overview}</p>

        <div className=""> 
            <button className="px-8 p-3 bg-gray-700 text-white text-lg mx-2 rounded-md">▶️ Pay</button>
            <button className="px-8 p-3 bg-gray-700 text-white text-lg mx-2 rounded-md">More Info</button>
        </div>
    </div>
  )
}

export default VideoInfo