<template>
    <div class="footer_main">
      +7 775 111 11 77
      <div class="footer_title">
        Для получения дополнительной информации
      </div>
    </div>
  </template>
  
  <style scoped>
  .footer_main {
    position: relative;
    margin-top: 30px;
    background-color: #14131c;
    padding: 30px;
    border-radius: 18px;
    color: #fff;
    font-size: 26px;
    font-weight: 400;
  }
  
  .footer_title {
    position: absolute;
    top: -8px;
    font-size: 18px;
  }
  
  /* Мобильная версия */
  @media (max-width: 600px) {
    .footer_main {
      padding: 20px;
      font-size: 20px;
    }
  
    .footer_title {
      font-size: 14px;
      top: -6px;
    }
  }
  </style>
  