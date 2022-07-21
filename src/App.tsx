import { useState } from "react";
import { Tweet } from "./components/Tweet"

import './App.css'
import { AppRoutes } from "./Routes";

function App() {
  // ### desconstruindo o estado ###
  // const [tweets, setTweets] = useState<string[]>([
  //   'Tweet 1',
  //   'Tweet 2',
  //   'Tweet 3'
  // ])

  // function createTweet() {
  //   setTweets([...tweets, `Tweet ${(tweets.length + 1).toString()}`])
  // }

  return (
    <AppRoutes />
    // <div>
    //   {
    //     tweets.map(tweet => {
    //       return <Tweet text={tweet} />
    //     })
    //   }

    //   <button 
    //     onClick={createTweet}
    //     style={{
    //       backgroundColor: '#E9967A',
    //       border: 0, 
    //       padding: '6px 12px', 
    //       color: '#fff'
    //     }}
    //   >
    //     Add Tweet
    //   </button>
    // </div>
  );
}

export default App
