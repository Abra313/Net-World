
const Footer = () => {
    return ( 
        <div>
            <footer className=" border-t-1 flex flex-col justify-center items-center space-y-10 min-h-[300px] X-20 border-t-[1px]" >
              
              <div className=" flex space-x-[30%] justify-center items-center font-s text-ashDark w-[80%] mt-[100px]">
                    <div className="flex justice-centre item-centre font-light">
                       <ul>
                       <CustomLink href="/about">About</CustomLink>
                        <CustomLink href="/terms">Terms </CustomLink>
                        <CustomLink href="/privacy">Privacy</CustomLink>
                        <CustomLink href="/disclaimer">Disclaimer</CustomLink>
                        <CustomLink href="/acceptable">Acceptable</CustomLink>

                       </ul> 
                    </div>
                    <div className="flex justice-center items-center font-light">
                    <ul>
                        <CustomLink href="/faq">FAQ</CustomLink>
                        <CustomLink href="/complaint">Complaints Policy </CustomLink>
                        <CustomLink href="/cookie">Cookie Notice</CustomLink>
                        <CustomLink href="/dmca">DMCA</CustomLink>
                        <CustomLink href="/usc">USC 2257</CustomLink>
                        
                    </ul> 

                    </div>
                    <div className="flex justify-center items-center font-light ">
                    <ul>
                        
                        <CustomLink href="/contact">Contact</CustomLink>
                        <CustomLink href="/blogs">Blogs</CustomLink>
                        <CustomLink href="/referral">Referral</CustomLink>
                        <CustomLink href="/standard">Standard Agreement</CustomLink>
                        <CustomLink href="/press">Press/Media</CustomLink>
                       
                       </ul> 
                    </div>
                </div>
              
                <div>
                    <p className="font-light text-40x1 text-ashDark font-s  ">@ 2024 Net World.All rights reserved</p>
                </div>
            </footer>
        </div>
     );
}

function CustomLink({ href,children,...props}){
    
    return(
        <li >
            <a href={href}>{children}</a></li>

    )

}

 
export default Footer ;