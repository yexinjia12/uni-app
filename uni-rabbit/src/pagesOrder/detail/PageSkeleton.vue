<template name="skeleton">
  <view class="sk-container">
    <view class="navbar" style="padding-top: 20px">
      <view class="wrap">
        <navigator class="back icon-home sk-pseudo sk-pseudo-circle" open-type="switchTab"></navigator>
        <view class="title sk-transparent sk-text-14-2857-634 sk-text">订单详情</view>
      </view>
    </view>
    <scroll-view :scroll-y="true" class="viewport" id="scroller" :enable-back-to-top="true">
      <view class="overview sk-image" style="padding-top: 40px">
        <view class="status icon-clock sk-transparent sk-text-0-0000-148 sk-text sk-pseudo sk-pseudo-circle">等待付款</view>
        <view class="tips sk-transparent">
          <text class="money sk-transparent sk-text-0-0000-805 sk-text">应付金额: ¥ 99.00</text>
          <text class="time sk-transparent sk-text-0-0000-841 sk-text">支付剩余</text> 00 时 29 分
          59 秒
        </view>
        <view class="button sk-transparent sk-text-29-6296-184 sk-text" style="background-position-x: 50%">去支付</view>
      </view>
      <view class="shipment">
        <view class="item sk-image">
          <view class="message sk-transparent sk-text-14-2857-122 sk-text">
            您已在广州市天河区黑马程序员完成取件，感谢使用菜鸟驿站，期待再次为您服务。
          </view>
          <view class="date sk-transparent sk-text-14-2857-517 sk-text"> 2023-04-14 13:14:20 </view>
        </view>
        <view class="locate sk-image">
          <view class="user sk-transparent sk-text-14-2857-547 sk-text"> 张三 13333333333 </view>
          <view class="address sk-transparent sk-text-14-2857-416 sk-text">
            广东省 广州市 天河区 黑马程序员
          </view>
        </view>
      </view>
      <view class="goods">
        <view class="item">
          <navigator class="navigator" hover-class="none">
            <image class="cover sk-image"></image>
            <view class="meta">
              <view class="name ellipsis sk-transparent sk-text-14-2857-387 sk-text">ins风小碎花泡泡袖衬110-160cm</view>
              <view class="type sk-transparent sk-text-22-2222-386 sk-text">藏青小花， 130</view>
              <view class="price">
                <view class="actual">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="sk-transparent sk-text-14-2857-450 sk-text">99.00</text>
                </view>
              </view>
              <view class="quantity sk-transparent sk-opacity">x1</view>
            </view>
          </navigator>
          <navigator class="navigator" hover-class="none">
            <image class="cover sk-image"></image>
            <view class="meta">
              <view class="name ellipsis sk-transparent sk-text-14-2857-889 sk-text">ins风小碎花泡泡袖衬110-160cm</view>
              <view class="type sk-transparent sk-text-22-2222-878 sk-text">藏青小花， 130</view>
              <view class="price">
                <view class="actual">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="sk-transparent sk-text-14-2857-664 sk-text">99.00</text>
                </view>
              </view>
              <view class="quantity sk-transparent sk-opacity">x1</view>
            </view>
          </navigator>
          <view class="action">
            <view class="button primary sk-transparent sk-text-28-0000-544 sk-text" style="background-position-x: 50%">
              申请售后</view>
            <navigator class="button sk-transparent sk-text-28-0000-459 sk-text" style="background-position-x: 50%">
              去评价
            </navigator>
          </view>
        </view>
        <view class="total">
          <view class="row">
            <view class="text sk-transparent sk-text-0-0000-973 sk-text">商品总价: </view>
            <view class="symbol sk-transparent sk-text-0-0000-196 sk-text sk-pseudo sk-pseudo-circle">99.00</view>
          </view>
          <view class="row">
            <view class="text sk-transparent sk-text-0-0000-847 sk-text">运费: </view>
            <view class="symbol sk-transparent sk-text-0-0000-208 sk-text sk-pseudo sk-pseudo-circle">10.00</view>
          </view>
          <view class="row">
            <view class="text sk-transparent sk-text-0-0000-826 sk-text">应付金额: </view>
            <view class="symbol primary sk-transparent sk-text-0-0000-475 sk-text sk-pseudo sk-pseudo-circle">109.00
            </view>
          </view>
        </view>
      </view>
      <view class="toolbar" style="padding-bottom: 0px">
        <view class="button primary sk-transparent sk-text-14-2857-105 sk-text"> 去支付 </view>
        <view class="button sk-transparent sk-text-14-2857-151 sk-text"> 取消订单 </view>
      </view>
    </scroll-view>
  </view>
</template>
<style>
.sk-transparent {
  color: transparent !important;
}

.sk-text-14-2857-634 {
  background-image: linear-gradient(transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%) !important;
  background-size: 100% 42.6563rpx;
  position: relative !important;
}

.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}

.sk-text-0-0000-148 {
  background-image: linear-gradient(transparent 0%,
      #eeeeee 0%,
      #eeeeee 100%,
      transparent 0%) !important;
  background-size: 100% 35.1563rpx;
  position: relative !important;
}

.sk-text-0-0000-805 {
  background-image: linear-gradient(transparent 0%,
      #eeeeee 0%,
      #eeeeee 100%,
      transparent 0%) !important;
  background-size: 100% 32.8125rpx;
  position: relative !important;
}

.sk-text-0-0000-841 {
  background-image: linear-gradient(transparent 0%,
      #eeeeee 0%,
      #eeeeee 100%,
      transparent 0%) !important;
  background-size: 100% 32.8125rpx;
  position: relative !important;
}

.sk-text-29-6296-184 {
  background-image: linear-gradient(transparent 29.6296%,
      #eeeeee 0%,
      #eeeeee 70.3704%,
      transparent 0%) !important;
  background-size: 100% 63.2813rpx;
  position: relative !important;
}

.sk-text-14-2857-122 {
  background-image: linear-gradient(transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%) !important;
  background-size: 100% 36.0938rpx;
  position: relative !important;
}

.sk-text-14-2857-517 {
  background-image: linear-gradient(transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%) !important;
  background-size: 100% 32.8125rpx;
  position: relative !important;
}

.sk-text-14-2857-547 {
  background-image: linear-gradient(transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%) !important;
  background-size: 100% 36.0938rpx;
  position: relative !important;
}

.sk-text-14-2857-416 {
  background-image: linear-gradient(transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%) !important;
  background-size: 100% 32.8125rpx;
  position: relative !important;
}

.sk-text-14-2857-387 {
  background-image: linear-gradient(transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%) !important;
  background-size: 100% 36.0938rpx;
  position: relative !important;
}

.sk-text-22-2222-386 {
  background-image: linear-gradient(transparent 22.2222%,
      #eeeeee 0%,
      #eeeeee 77.7778%,
      transparent 0%) !important;
  background-size: 100% 42.1875rpx;
  position: relative !important;
}

.sk-opacity {
  opacity: 0 !important;
}

.sk-text-14-2857-450 {
  background-image: linear-gradient(transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%) !important;
  background-size: 100% 32.8125rpx;
  position: relative !important;
}

.sk-text-14-2857-889 {
  background-image: linear-gradient(transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%) !important;
  background-size: 100% 36.0938rpx;
  position: relative !important;
}

.sk-text-22-2222-878 {
  background-image: linear-gradient(transparent 22.2222%,
      #eeeeee 0%,
      #eeeeee 77.7778%,
      transparent 0%) !important;
  background-size: 100% 42.1875rpx;
  position: relative !important;
}

.sk-text-14-2857-664 {
  background-image: linear-gradient(transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%) !important;
  background-size: 100% 32.8125rpx;
  position: relative !important;
}

.sk-text-28-0000-544 {
  background-image: linear-gradient(transparent 28%,
      #eeeeee 0%,
      #eeeeee 72%,
      transparent 0%) !important;
  background-size: 100% 58.5938rpx;
  position: relative !important;
}

.sk-text-28-0000-459 {
  background-image: linear-gradient(transparent 28%,
      #eeeeee 0%,
      #eeeeee 72%,
      transparent 0%) !important;
  background-size: 100% 58.5938rpx;
  position: relative !important;
}

.sk-text-0-0000-973 {
  background-image: linear-gradient(transparent 0%,
      #eeeeee 0%,
      #eeeeee 100%,
      transparent 0%) !important;
  background-size: 100% 25.7813rpx;
  position: relative !important;
}

.sk-text-0-0000-196 {
  background-image: linear-gradient(transparent 0%,
      #eeeeee 0%,
      #eeeeee 100%,
      transparent 0%) !important;
  background-size: 100% 25.7813rpx;
  position: relative !important;
}

.sk-text-0-0000-847 {
  background-image: linear-gradient(transparent 0%,
      #eeeeee 0%,
      #eeeeee 100%,
      transparent 0%) !important;
  background-size: 100% 25.7813rpx;
  position: relative !important;
}

.sk-text-0-0000-208 {
  background-image: linear-gradient(transparent 0%,
      #eeeeee 0%,
      #eeeeee 100%,
      transparent 0%) !important;
  background-size: 100% 25.7813rpx;
  position: relative !important;
}

.sk-text-0-0000-826 {
  background-image: linear-gradient(transparent 0%,
      #eeeeee 0%,
      #eeeeee 100%,
      transparent 0%) !important;
  background-size: 100% 25.7813rpx;
  position: relative !important;
}

.sk-text-0-0000-475 {
  background-image: linear-gradient(transparent 0%,
      #eeeeee 0%,
      #eeeeee 100%,
      transparent 0%) !important;
  background-size: 100% 35.1563rpx;
  position: relative !important;
}

.sk-text-14-2857-105 {
  background-image: linear-gradient(transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%) !important;
  background-size: 100% 36.0938rpx;
  position: relative !important;
}

.sk-text-14-2857-151 {
  background-image: linear-gradient(transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%) !important;
  background-size: 100% 36.0938rpx;
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
