import { Squares2X2Icon, UserCircleIcon, BuildingStorefrontIcon,PlusIcon} from "@heroicons/react/16/solid"


 const navLinks=[
   {name:'My NFTs', icon: <Squares2X2Icon className='h-6'/>,href:'/dashboard'},
   {name:'Create NFTs', icon:<PlusIcon className='h-6'/>,href:'/dashboard/link'},
   {name:'NFT Marketplace', icon:<BuildingStorefrontIcon className='h-6'/>, href:'/dashboard/history'},
   {name:'Account', icon:<UserCircleIcon className='h-6'/>, href:'/dashboard/history'}

]

export default navLinks