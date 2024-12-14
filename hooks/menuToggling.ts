import MenuToggling from "@/app/context/Wrapper"
import { useContext } from "react"

const useMenuToggling = () => useContext(MenuToggling)

export default useMenuToggling