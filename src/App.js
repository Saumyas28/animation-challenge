import React from 'react';
import './App.css';
import Cart from './components/Cart/index';

const images = [
  {
    frontView: 'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/1820129/2019/10/12/35436ceb-1951-4858-89c7-487634eb2f4e1570881496093-HRX-by-Hrithik-Roshan-Unisex-Black--Red-Colourblocked-Dual-B-1.jpg',
    leftView: 'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/1820129/2019/10/12/2928c757-8f25-40a7-9fed-5c9044b1bfc71570881496048-HRX-by-Hrithik-Roshan-Unisex-Black--Red-Colourblocked-Dual-B-2.jpg',
    backView: 'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/1820129/2019/10/12/08a66fcb-fc83-41ad-b33a-94980c65292f1570881496017-HRX-by-Hrithik-Roshan-Unisex-Black--Red-Colourblocked-Dual-B-3.jpg',
    rightView: 'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/1820129/2019/10/12/de70f23d-9cba-4d9a-84f8-0820bd42a0111570881495906-HRX-by-Hrithik-Roshan-Unisex-Black--Red-Colourblocked-Dual-B-6.jpg',
    topView: 'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/1820129/2019/10/12/41d7eff0-9d19-412f-a15f-d202823baf8a1570881495985-HRX-by-Hrithik-Roshan-Unisex-Black--Red-Colourblocked-Dual-B-4.jpg',
    bottomView: 'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/1820129/2019/10/12/1ff2eb59-e1fe-416c-aa9a-bf74fffd75721570881495953-HRX-by-Hrithik-Roshan-Unisex-Black--Red-Colourblocked-Dual-B-5.jpg'
  },
  {
    frontView: 'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/5571267/2018/4/30/11525083933884-LEGAL-BRIBE-Green-Solid-Handheld-Bag-2491525083933711-1.jpg',
    leftView: 'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/5571267/2018/4/30/11525083933855-LEGAL-BRIBE-Green-Solid-Handheld-Bag-2491525083933711-2.jpg',
    backView: 'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/5571267/2018/4/30/11525083933829-LEGAL-BRIBE-Green-Solid-Handheld-Bag-2491525083933711-3.jpg',
    rightView: 'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/5571267/2018/4/30/11525083933785-LEGAL-BRIBE-Green-Solid-Handheld-Bag-2491525083933711-5.jpg',
    topView: 'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/5571267/2018/4/30/11525083933803-LEGAL-BRIBE-Green-Solid-Handheld-Bag-2491525083933711-4.jpg',
    bottomView: 'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/5571267/2018/4/30/11525083933785-LEGAL-BRIBE-Green-Solid-Handheld-Bag-2491525083933711-5.jpg'
  },
  {
    frontView: 'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/4065768/2019/10/25/930748dd-9f8d-4cf5-b5ea-3334d67307481571975555422-HRX-by-Hrithik-Roshan-Men-Blue-Fly-Sneakers-Sneakers-1291571-1.jpg',
    leftView: 'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/4065768/2019/10/25/b7dbaad5-73cc-4d90-82c6-cd84e7c3e6451571975555376-HRX-by-Hrithik-Roshan-Men-Blue-Fly-Sneakers-Sneakers-1291571-2.jpg',
    backView: 'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/4065768/2019/10/25/0baf4f42-e0d6-4ca4-8ebb-73975752fbfa1571975555214-HRX-by-Hrithik-Roshan-Men-Blue-Fly-Sneakers-Sneakers-1291571-5.jpg',
    rightView: 'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/4065768/2019/10/25/539edcf4-b5ff-4b16-884a-0944378700431571975555318-HRX-by-Hrithik-Roshan-Men-Blue-Fly-Sneakers-Sneakers-1291571-3.jpg',
    topView: 'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/4065768/2019/10/25/80c1a780-103b-4dda-82a4-c38a63575eb61571975555262-HRX-by-Hrithik-Roshan-Men-Blue-Fly-Sneakers-Sneakers-1291571-4.jpg',
    bottomView: 'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/4065768/2019/10/25/3b6a6ba4-0046-4203-a882-4042639086801571975555164-HRX-by-Hrithik-Roshan-Men-Blue-Fly-Sneakers-Sneakers-1291571-6.jpg'
  }
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Cart images={images} iconType='shopping-cart' />
      </header>
    </div>
  );
}

export default App;
