'use client'

import { useContext } from "react"
import MYDescription from "../context/myDescription"

const useDescription = () => useContext(MYDescription)

export default useDescription