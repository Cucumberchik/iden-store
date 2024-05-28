import { NextPage } from "next"
import { ReactNode } from "react"
import logo from "@/assets/icon/dark-icon.svg"
import Image from "next/image"

const Home:NextPage = ():ReactNode => {

  return (
    <main>
      <Image src={logo} alt="logo" />
    </main>
  )
}

export default Home