import React from 'react';
import imageAssets from "../utils/image";

const FooterComponent = () => {

  return (
    <div className='bg-darkColor font-poppins text-basicColor'>
        <section className='flex justify-between mx-16 mb-20 pt-9'>
            <div className='text-sm'>
                <img 
                    src={imageAssets.icCulturKu} 
                    alt="" 
                />
                <p className="mt-4">codeslinger@gmail.com</p>
                <p className="mt-4">+1 (201) 895-3801</p>
                <div className='flex mt-2'>
                    <img src={imageAssets.icInstagram} alt="" className='mt-2'/>
                    <img src={imageAssets.icFacebook} alt="" className='ml-2'/>
                    <img src={imageAssets.icTwitter} alt="" className='ml-2'/>
                </div>
            </div>
            <div className='text-sm font-thin'>
                <p className="mt-4">Budaya Kita</p>
                <p className="mt-4">Pustaka Budaya</p>
                <p className="mt-4">Quiz</p>
                <p className="mt-4">Store Rewards</p>
            </div>
        </section>
        <section className='flex justify-center py-6 text-xs font-thin'>
            <p>© 2023 Code Slinger. All rights reserved.</p>
        </section>
    </div>
  );
};

export default FooterComponent;
