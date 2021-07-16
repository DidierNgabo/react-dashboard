import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons';
import {Link} from 'react-router-dom';

const User = () => {
  return (
    <div className="user">
      <div className="usrTitleContainer">
        <h1 className="usrTitle">Edit User</h1>
       <Link to="/users/new"> <button className="usrAddButton">Create</button></Link>
      </div>
      <div className="usrContainer">
       <div className="usrShow">
         <div className="usrShowTop">
           <img src="/profile.jpg" alt="" className="usrShowImg" />
           <div className="usrShowTopTitle">
             <span className="usrShowUsername">Jon Doe</span>
             <span className="usrShowJob">Software Engineer</span>
           </div>
         </div>
         <div className="usrShowBottom">
           <span className="usrShowTitle">
             Account Details
           </span>
           <div className="usrShowInfo">
           <PermIdentity className="usrShowIcon"/>
           <span className="usrShowInfoTitle">jondoe99</span>
           </div>
           <div className="usrShowInfo">
           <CalendarToday className="usrShowIcon"/>
           <span className="usrShowInfoTitle">10.12.1999</span>
           </div>
           <span className="usrShowTitle">
             Contact Details
           </span>
           <div className="usrShowInfo">
           <PhoneAndroid className="usrShowIcon"/>
           <span className="usrShowInfoTitle">+250790456724</span>
           </div>
           <div className="usrShowInfo">
           <MailOutline className="usrShowIcon"/>
           <span className="usrShowInfoTitle">jondoe99@gmail.com</span>
           </div>
           <div className="usrShowInfo">
           <LocationSearching className="usrShowIcon"/>
           <span className="usrShowInfoTitle">Kigali | Rwanda</span>
           </div>
         </div>
       </div>
       <div className="usrUpdate">
         <span className="usrUpdateTitle">Edit</span>
         <form className="usrUpdateForm">
           <div className="usrUpdateLeft">
             <div className="usrUpdateItem">
               <label >Username</label>
               <input type="text" placeholder="jondoe99" className="usrUpdateInput"/>
             </div>
             <div className="usrUpdateItem">
               <label >Full Name</label>
               <input type="text" placeholder="jon doe" className="usrUpdateInput"/>
             </div>
             <div className="usrUpdateItem">
               <label >Email</label>
               <input type="text" placeholder="jondoe99@gmail" className="usrUpdateInput"/>
             </div>
             <div className="usrUpdateItem">
               <label >Phone</label>
               <input type="text" placeholder="+250790456724" className="usrUpdateInput"/>
             </div>
             <div className="usrUpdateItem">
               <label >Address</label>
               <input type="text" placeholder="Kigali | Rwanda" className="usrUpdateInput"/>
             </div>
           </div>
           <div className="usrUpdateRight">
             <div className="usrUpdateUpload">
               <img src="/profile.jpg" className="usrUpdateImg" alt="" />
               <label htmlFor="file"><Publish className="usrUpdateIcon"/></label>
               <input type="file" name="" id="file" style={{display:"none"}} />
             </div>
             <button className="usrUpdateButton">Update</button>
           </div>
         </form>
       </div>
      </div>
    </div>
  );
};

export default User;
