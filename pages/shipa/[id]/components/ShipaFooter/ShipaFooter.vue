<template>
  <div class="footer_main">
    <a href="tel:87023954343" class="phone-link">
      <Icon name="uil:phone" class="text-blue-500 "  size="26" /> 87023954343</a
    >
    <br />
    <a href="tel:87053954343" class="phone-link"
      ><Icon name="uil:phone" class="text-blue-500 "  size="26" /> 87053954343</a
    >
    <div class="footer_title">Для получения дополнительной информации</div>
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

.phone-link {
  color: #ffffffb5;
  text-decoration: none;
  font-size: 26px;
}

.phone-link:hover {
  text-decoration: underline;
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

  .phone-link {
    font-size: 20px;
  }
}
</style>
