import { FC } from "react"

const Wrapper:FC<{children:React.ReactNode}> = ({children}) => {
  return (
    <div className="max-w-screen-2xl mx-auto pl-3 pr-3 md:pl-5 md:pr-5">
        {children}
    </div>
  )
}

export default Wrapper