import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import styles from './privacy-policy.module.css';

const PrivacyPolicyPage = () => {
  return (
    <>
      <Helmet>
        <title>Gizlilik Politikası | Mihrapp</title>
        <meta
          name="description"
          content="Mihrapp uygulamasının gizlilik politikasını ve kullanıcı verilerini nasıl işlediğimizi öğrenin."
        />
        <body className="dark" />
      </Helmet>
      <div className={styles.container}>
        <Link to="/#contact" className={styles.backLink}>
          <ArrowLeft size={16} />
          <span>Ana Sayfaya Dön</span>
        </Link>

        <h1 className={styles.title}>Gizlilik Politikası</h1>
        <p className={styles.lastUpdated}>Son Güncelleme: 24 Ağustos 2024</p>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>1. Giriş</h2>
          <p className={styles.text}>
            Mihrapp ("biz", "bize" veya "bizim") olarak, gizliliğinize değer veriyoruz. Bu Gizlilik Politikası, mobil uygulamamız ve ilgili hizmetlerimiz (topluca "Hizmet") aracılığıyla topladığımız, kullandığımız, ifşa ettiğimiz ve koruduğumuz bilgileri anlamanıza yardımcı olmak için hazırlanmıştır. Hizmetimizi kullanarak, bu politikada açıklanan veri uygulamalarını kabul etmiş olursunuz.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>2. Topladığımız Bilgiler</h2>
          <p className={styles.text}>
            Hizmetlerimizi sunmak ve geliştirmek için çeşitli türde bilgiler toplayabiliriz:
          </p>
          <ul className={styles.list}>
            <li><strong>Kişisel Bilgiler:</strong> Kayıt sırasında sağladığınız ad, e-posta adresi gibi bilgiler.</li>
            <li><strong>Kullanım Verileri:</strong> Uygulama içi etkileşimleriniz, ibadet takibi verileriniz, belirlediğiniz hedefler ve kazandığınız rozetler gibi bilgiler.</li>
            <li><strong>Cihaz Bilgileri:</strong> Mobil cihazınızın türü, işletim sistemi, benzersiz cihaz kimlikleri ve konum verileri (izninizle) gibi teknik bilgiler.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>3. Bilgilerinizi Nasıl Kullanıyoruz?</h2>
          <p className={styles.text}>
            Topladığımız bilgileri aşağıdaki amaçlar için kullanırız:
          </p>
          <ul className={styles.list}>
            <li>Hizmetlerimizi sağlamak, sürdürmek ve kişiselleştirmek.</li>
            <li>Manevi yolculuğunuzu desteklemek için size özel içerikler ve hatırlatıcılar sunmak.</li>
            <li>Uygulama performansını analiz etmek ve yeni özellikler geliştirmek.</li>
            <li>Sizinle iletişim kurmak, destek sağlamak ve güncellemeler hakkında sizi bilgilendirmek.</li>
            <li>Yasal yükümlülüklere uymak ve dolandırıcılığı önlemek.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>4. Çerezler ve Takip Teknolojileri</h2>
          <p className={styles.text}>
            Uygulama deneyiminizi geliştirmek için çerezlere benzer teknolojiler kullanabiliriz. Bu teknolojiler, tercihlerinizi hatırlamamıza ve kullanım eğilimlerini anlamamıza yardımcı olur. Cihaz ayarlarınızdan bu teknolojileri kontrol edebilirsiniz, ancak bu durum bazı özelliklerin düzgün çalışmasını engelleyebilir.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>5. Üçüncü Taraf Hizmetleri</h2>
          <p className={styles.text}>
            Hizmetlerimizi analiz etmek ve geliştirmek için üçüncü taraf hizmet sağlayıcılarından (örneğin, analiz araçları) yararlanabiliriz. Bu sağlayıcılar, kendi gizlilik politikalarına tabi olarak bilgilerinize erişebilirler. Kişisel bilgilerinizi izniniz olmadan pazarlama amacıyla üçüncü taraflarla paylaşmayız.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>6. Kullanıcı Hakları</h2>
          <p className={styles.text}>
            Verileriniz üzerinde belirli haklara sahipsiniz. Bu haklar arasında bilgilerinize erişme, onları düzeltme, silme veya işlenmesini kısıtlama talebinde bulunma yer alır. Bu haklarınızı kullanmak için lütfen aşağıda belirtilen iletişim bilgileri üzerinden bizimle iletişime geçin.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>7. Gizlilik Politikası Değişiklikleri</h2>
          <p className={styles.text}>
            Bu Gizlilik Politikasını zaman zaman güncelleyebiliriz. Değişiklikler bu sayfada yayınlanacak ve "Son Güncelleme" tarihi revize edilecektir. Değişikliklerden haberdar olmak için bu politikayı düzenli olarak gözden geçirmenizi öneririz.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>8. İletişim</h2>
          <p className={styles.text}>
            Bu Gizlilik Politikası ile ilgili herhangi bir sorunuz veya endişeniz varsa, lütfen bizimle iletişime geçin:
            <br />
            E-posta: <a href="mailto:bilgi@mihrapp.com.tr" className={styles.contactLink}>bilgi@mihrapp.com.tr</a>
            <br />
            Telefon: <a href="tel:+905541312451" className={styles.contactLink}>+90 554 131 24 51</a>
          </p>
        </section>
      </div>
    </>
  );
};

export default PrivacyPolicyPage;