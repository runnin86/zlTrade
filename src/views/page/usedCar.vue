<template>
  <div class="content" transition="bounce">
  <!--顶部-->
  <div class="com-header">
    <div class="return"><a href="javascript:history.go(-1)"><i class="iconfont">&#xe624;</i></a></div>
    <div class="header-title">二手车买卖</div>
  </div>
  <div class="header-h"></div>
  <!--顶部:over-->
   <!--筛选弹窗-->
    <div class="used-dialog" id="used-light">
     <div class="used-dialog-top">
      <a href="javascript:;" onclick="hide_sel()"><i class="icon">&#xe624;</i></a>
      <h3>价格 · 品牌 · 车型</h3>
     </div>
     <div class="used-dialog-top-h"></div>
     <div class="used-dialog-middle">
     	<div class="sxbox">
     	 <div class="sxbox-top"><strong>价格</strong><span>0-5万</span></div>
     	 <div class="sxbox-bottom">
     	 	<div class="sxbox-bottom-container">
     	 		<label>不限</label><label class="active">0-5万</label><label>5-10万</label><label>10-15万</label><label>15-20万</label><label>20-30万</label><label>30-40万</label><label>40万以上</label>
     	 	</div>
     	 </div>
     	</div>
     	<div class="sxbox">
     	 <div class="sxbox-top"><strong>品牌</strong><span>奥迪</span></div>
     	 <div class="sxbox-bottom">
     	 	<div class="sxbox-bottom-container">
     	 		<label>宝马</label><label class="active">奥迪</label><label>奔驰</label><label>别克</label><label>现代</label><label>大众</label><label>长安</label><label>奔驰</label><label>别克</label><label>现代</label><label>大众</label><label>长安</label><label>奔驰</label><label>别克</label><label>现代</label><label>大众</label><label>长安</label><label>奔驰</label><label>别克</label><label>现代</label><label>大众</label><label>长安</label><label>奔驰</label><label>别克</label><label>现代</label><label>大众</label><label>长安</label>
     	 	</div>
     	 </div>
     	</div>
     	<div class="sxbox">
     	 <div class="sxbox-top"><strong>车型</strong><span>0-5万</span></div>
     	 <div class="sxbox-bottom">
     	 	<div class="sxbox-bottom-container">
     	 		<label>SUV</label><label class="active">经济型</label><label>商务型</label><label>跑车</label><label>皮卡</label><label>面包车</label><label>商务型</label><label>跑车</label><label>皮卡</label><label>面包车</label>
     	 	</div>
     	 </div>
     	</div>
     	<br /><br /><br /><br /><br />
     </div>
     <div class="used-dialog-bottom-h"></div>
     <div class="used-dialog-bottom">
      <input type="button" class="btn-ok"  value="确定"/>
      <input type="button" class="btn-no" value="取消" onclick="hide_sel()" />
     </div>

    </div>
    <div class="used-black" id="used-fade"></div>
  </div>
</template>

<script>

</script>

<style>

</style>
