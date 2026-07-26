<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
const route = useRoute()

// canonical：各頁指向自身的絕對網址
useHead(() => ({
  link: [
    {
      rel: 'canonical',
      href: `https://leadmaster.tw${route.path === '/' ? '' : route.path}`,
    },
  ],
}))

// LocalBusiness 結構化資料：地址電話同 footer，服務清單對應 SEO 目標關鍵字
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: '立麥餐飲設備有限公司',
        alternateName: 'LEADMASTER KITCHEN EQUIPMENT CO., LTD.',
        url: 'https://leadmaster.tw',
        image: 'https://leadmaster.tw/og_img.jpg',
        telephone: '+886-2-2916-1022',
        email: 'bryanwu088@gmail.com',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '新店區二十張路33巷2弄1號1樓',
          addressLocality: '新北市',
          postalCode: '231',
          addressCountry: 'TW',
        },
        sameAs: ['https://www.facebook.com/LiMaiCanYinSheBeiYouXianGongSi'],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: '服務項目',
          itemListElement: [
            '廚房顧問',
            '餐飲顧問',
            '廚房設計',
            'HACCP顧問',
            '酒吧顧問',
            '酒櫃設計顧問',
            '食品加工廠設計',
            '國際酒店餐飲設備顧問',
          ].map((name) => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name },
          })),
        },
      }),
    },
  ],
})
</script>
