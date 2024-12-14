import ClientBounding from "@/app/context/clientBounding"
import { useContext } from "react"

const useClientBounding = () => useContext(ClientBounding)

export default useClientBounding