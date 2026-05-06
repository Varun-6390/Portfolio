import { GitHubCalendar } from "react-github-calendar"

export default function Contribution(){
    return(
        <div className="bg-black flex flex-col items-center px-4 py-20 w-full overflow-hidden">

  <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-6">
    Github Contribution
  </h2>

  <div className="w-full overflow-x-auto scrollbar-hide">
    
    <div className="min-w-max flex justify-center">
      <GitHubCalendar
  username="Varun-6390"
  blockSize={12}
  blockMargin={3}
  fontSize={12}
/>
    </div>

  </div>

</div>
    )
}