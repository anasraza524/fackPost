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

{/* <ul>
    <li><FaPager/>  <p>PAGE</p></li>
    <li><BsSave/> <p>SAVE</p></li>
    <li><RiGroup2Fill/> <p>GROUP</p></li>
    <li><SiMarketo/> <p>MARKETPLACE</p></li>
    <li><MdOndemandVideo/> <p>WATCH</p></li>
    <li><FaUserFriends/> <p>FRIENDS</p></li>
    <li><CgTimelapse/> <p>MEMORIES</p></li>
    <li><HiSpeakerphone/> <p>ADD CENTER</p></li>
    </ul> */}
    <ul className="list">
          <li className="listItems">
            <img
              src=".https://scontent.fkhi20-1.fna.fbcdn.net/v/t39.30808-6/306786755_1202817790289152_518738169980312581_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6rHQjW2YWHIAX9S4QQb&_nc_ht=scontent.fkhi20-1.fna&oh=00_AT--CGP6DWk_BK1ESQDorgETSreDN5rZXNEjLaBGc6MUSw&oe=63306040"
              alt=""
              className="listItemsImageround"
            />
            <p className="listItemsText">Muhammad Anas Raza</p>
          </li>
          <li className="listItems">
            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png" alt="" className="listItemsImage" />
            {/* <FontAwesomeIcon style={{color:"red"}} icon={faThumbsUp} />  */}
            {/* <FontAwesomeIcon icon={faUserGroup} /> */}
            <p className="listItemsText">Friends</p>
          </li>
          <li className="listItems">

            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png" alt="" className="listItemsImage" />
          {/* <FontAwesomeIcon style={{color:"red"}} icon={faComment} />  */}
            <p className="listItemsText">Groups</p>
          </li>
          <li className="listItems">
            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/D2y-jJ2C_hO.png" alt="" className="listItemsImage" />
            {/* <FontAwesomeIcon className="shareIcon" icon={faShare} /> */}
            <p className="listItemsText">Marketplace</p>
          </li>
          <li className="listItems">
            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/duk32h44Y31.png" alt="" className="listItemsImage" />
            <p className="listItemsText">Watch</p>
          </li>
          <li className="listItems">
            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/lVijPkTeN-r.png" alt="" className="listItemsImage" />
            <p className="listItemsText">Saved</p>
          </li>
          <li className="listItems">
            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/kyCAf2jbZvF.png" alt="" className="listItemsImage" />
            <p className="listItemsText">Pages</p>
          </li>
          <li className="listItems">
            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/4Y9Xi2D3hJv.png" alt="" className="listItemsImage" />
            <p className="listItemsText">Massenger</p>
          </li>
          <li className="listItems">
            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/he-BkogidIc.png" alt="" className="listItemsImage" />
            <p className="listItemsText">Memories</p>
          </li>
          <li className="listItems">
            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/qfMB40PdgWb.png" alt="" className="listItemsImage" />
            <p className="listItemsText">Events</p>
          </li>
          <li className="listItems">
            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yb/r/eECk3ceTaHJ.png" alt="" className="listItemsImage" />
            <p className="listItemsText">Most recent</p>
            </li>
</ul>


</div>

}
export default leftBar;