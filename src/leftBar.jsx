import './App'
import { FaPager  } from "react-icons/fa";
import { BsSave  } from "react-icons/bs";
import { RiGroup2Fill } from "react-icons/ri";
import { SiMarketo } from "react-icons/si";
import { MdOndemandVideo } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { CgTimelapse } from "react-icons/cg";
import { HiSpeakerphone } from "react-icons/hi";
function leftBar(){
return<div className='LeftBar'>

<ul>
    <li><FaPager/>  <p>PAGE</p></li>
    <li><BsSave/> <p>SAVE</p></li>
    <li><RiGroup2Fill/> <p>GROUP</p></li>
    <li><SiMarketo/> <p>MARKETPLACE</p></li>
    <li><MdOndemandVideo/> <p>WATCH</p></li>
    <li><FaUserFriends/> <p>FRIENDS</p></li>
    <li><CgTimelapse/> <p>MEMORIES</p></li>
    <li><HiSpeakerphone/> <p>ADD CENTER</p></li>
    </ul>




</div>

}
export default leftBar;