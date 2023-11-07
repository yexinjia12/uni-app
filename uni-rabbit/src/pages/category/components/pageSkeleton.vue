<template name="skeleton">
  <view class="sk-container">
    <view class="viewport">
      <view class="search">
        <view class="input">
          <text class="icon-search sk-transparent sk-text-14-2857-663 sk-text sk-pseudo sk-pseudo-circle">女靴</text>
        </view>
      </view>
      <view class="categories">
        <scroll-view scroll-y="true" class="primary">
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-45 sk-text">居家</text>
          </view>
          <view class="item active sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-129 sk-text">美食</text>
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-980 sk-text">服饰</text>
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-749 sk-text">母婴</text>
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-672 sk-text">个护</text>
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-425 sk-text">严选</text>
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-236 sk-text">数码</text>
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-716 sk-text">运动</text>
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-563 sk-text">杂项</text>
          </view>
        </scroll-view>
        <scroll-view scroll-y="true" class="secondary">
          <view is="components/XtxSwiper" class="banner">
            <view class="carousel XtxSwiper--carousel">
              <swiper circular="true" interval="3000" current="0" autoplay="false">
                <swiper-item style="
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    transform: translate(0%, 0px) translateZ(0px);
                  ">
                  <navigator class="navigator XtxSwiper--navigator" hover-class="none">
                    <image class="image XtxSwiper--image sk-image" mode="aspectFill"></image>
                  </navigator>
                </swiper-item>
                <swiper-item style="
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    transform: translate(100%, 0px) translateZ(0px);
                  ">
                  <navigator class="navigator XtxSwiper--navigator" hover-class="none">
                    <image class="image XtxSwiper--image sk-image" mode="aspectFill"></image>
                  </navigator>
                </swiper-item>
              </swiper>
              <view class="indicator XtxSwiper--indicator">
                <text class="dot XtxSwiper--dot active XtxSwiper--active"></text>
                <text class="dot XtxSwiper--dot"></text>
                <text class="dot XtxSwiper--dot"></text>
                <text class="dot XtxSwiper--dot"></text>
                <text class="dot XtxSwiper--dot"></text>
              </view>
            </view>
          </view>
          <view class="panel">
            <view class="title">
              <text class="name sk-transparent sk-text-28-0000-49 sk-text">南北干货</text>
              <navigator class="more sk-transparent sk-text-30-0000-557 sk-text sk-pseudo sk-pseudo-circle"
                hover-class="none">全部</navigator>
            </view>
            <view class="section">
              <navigator class="goods" hover-class="none">
                <image class="image sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-737 sk-text">莆田桂圆肉368克</view>
                <view class="price">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="number sk-transparent sk-text-14-2857-32 sk-text">52.00</text>
                </view>
              </navigator>
              <navigator class="goods" hover-class="none">
                <image class="image sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-997 sk-text">产自核心产区宁夏中宁，枸杞258克</view>
                <view class="price">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="number sk-transparent sk-text-14-2857-927 sk-text">36.00</text>
                </view>
              </navigator>
              <navigator class="goods" hover-class="none">
                <image class="image sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-266 sk-text">竹荪25克</view>
                <view class="price">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="number sk-transparent sk-text-14-2857-901 sk-text">28.00</text>
                </view>
              </navigator>
              <navigator class="goods" hover-class="none">
                <image class="image sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-828 sk-text">若羌红枣脆片138克</view>
                <view class="price">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="number sk-transparent sk-text-14-2857-296 sk-text">18.00</text>
                </view>
              </navigator>
              <navigator class="goods" hover-class="none">
                <image class="image sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-563 sk-text">无芯软糯的萌妹子，建宁莲子228克</view>
                <view class="price">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="number sk-transparent sk-text-14-2857-222 sk-text">45.00</text>
                </view>
              </navigator>
              <navigator class="goods" hover-class="none">
                <image class="image sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-592 sk-text">楼兰灰枣328克</view>
                <view class="price">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="number sk-transparent sk-text-14-2857-768 sk-text">26.00</text>
                </view>
              </navigator>
              <navigator class="goods" hover-class="none">
                <image class="image sk-image"></image>
              </navigator>
              <navigator class="goods" hover-class="none">
                <image class="image sk-image"></image>
              </navigator>
            </view>
          </view>
        </scroll-view>
      </view>
    </view>
  </view>
</template>

<style>
.sk-transparent {
  color: transparent !important;
}

.sk-text-14-2857-663 {
  background-image: linear-gradient(transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%) !important;
  background-size: 100% 36.0938rpx;
  position: relative !important;
}

.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}

.sk-text-14-2857-45 {
  background-image: linear-gradient(transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%) !important;
  background-size: 100% 36.0938rpx;
  position: relative !important;
}

.sk-text-14-2857-129 {
  background-image: linear-gradient(transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%) !important;
  background-size: 100% 36.0938rpx;
  position: relative !important;
}

.sk-text-14-2857-980 {
  background-image: linear-gradient(transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%) !important;
  background-size: 100% 36.0938rpx;
  position: relative !important;
}

.sk-text-14-2857-749 {
  background-image: linear-gradient(transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%) !important;
  background-size: 100% 36.0938rpx;
  position: relative !important;
}

.sk-text-14-2857-672 {
  background-image: linear-gradient(transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%) !important;
  background-size: 100% 36.0938rpx;
  position: relative !important;
}

.sk-text-14-2857-425 {
  background-image: linear-gradient(transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%) !important;
  background-size: 100% 36.0938rpx;
  position: relative !important;
}

.sk-text-14-2857-236 {
  background-image: linear-gradient(transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%) !important;
  background-size: 100% 36.0938rpx;
  position: relative !important;
}

.sk-text-14-2857-716 {
  background-image: linear-gradient(transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%) !important;
  background-size: 100% 36.0938rpx;
  position: relative !important;
}

.sk-text-14-2857-563 {
  background-image: linear-gradient(transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%) !important;
  background-size: 100% 36.0938rpx;
  position: relative !important;
}

.sk-text-28-0000-49 {
  background-image: linear-gradient(transparent 28%,
      #eeeeee 0%,
      #eeeeee 72%,
      transparent 0%) !important;
  background-size: 100% 58.5938rpx;
  position: relative !important;
}

.sk-text-30-0000-557 {
  background-image: linear-gradient(transparent 30%,
      #eeeeee 0%,
      #eeeeee 70%,
      transparent 0%) !important;
  background-size: 100% 58.5938rpx;
  position: relative !important;
}

.sk-text-14-2857-737 {
  background-image: linear-gradient(transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%) !important;
  background-size: 100% 29.5313rpx;
  position: relative !important;
}

.sk-opacity {
  opacity: 0 !important;
}

.sk-text-14-2857-32 {
  background-image: linear-gradient(transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%) !important;
  background-size: 100% 32.8125rpx;
  position: relative !important;
}

.sk-text-14-2857-997 {
  background-image: linear-gradient(transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%) !important;
  background-size: 100% 29.5313rpx;
  position: relative !important;
}

.sk-text-14-2857-927 {
  background-image: linear-gradient(transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%) !important;
  background-size: 100% 32.8125rpx;
  position: relative !important;
}

.sk-text-14-2857-266 {
  background-image: linear-gradient(transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%) !important;
  background-size: 100% 29.5313rpx;
  position: relative !important;
}

.sk-text-14-2857-901 {
  background-image: linear-gradient(transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%) !important;
  background-size: 100% 32.8125rpx;
  position: relative !important;
}

.sk-text-14-2857-828 {
  background-image: linear-gradient(transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%) !important;
  background-size: 100% 29.5313rpx;
  position: relative !important;
}

.sk-text-14-2857-296 {
  background-image: linear-gradient(transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%) !important;
  background-size: 100% 32.8125rpx;
  position: relative !important;
}

.sk-text-14-2857-222 {
  background-image: linear-gradient(transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%) !important;
  background-size: 100% 32.8125rpx;
  position: relative !important;
}

.sk-text-14-2857-592 {
  background-image: linear-gradient(transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%) !important;
  background-size: 100% 29.5313rpx;
  position: relative !important;
}

.sk-text-14-2857-768 {
  background-image: linear-gradient(transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%) !important;
  background-size: 100% 32.8125rpx;
  position: relative !important;
}

.sk-image {
  background: #efefef !important;
}

.sk-pseudo::before,
.sk-pseudo::after {
  background: #efefef !important;
  background-image: none !important;
  color: transparent !important;
  border-color: transparent !important;
}

.sk-pseudo-rect::before,
.sk-pseudo-rect::after {
  border-radius: 0 !important;
}

.sk-pseudo-circle::before,
.sk-pseudo-circle::after {
  border-radius: 50% !important;
}

.sk-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: transparent;
}
</style>
