import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import styles from './terms-of-service.module.css';

const TermsOfServicePage = () => {
  return (
    <>
      <Helmet>
        <title>Kullanım Şartları | Mihrapp</title>
        <meta
          name="description"
          content="Mihrapp uygulamasını kullanmadan önce lütfen kullanım şartlarımızı ve koşullarımızı dikkatlice okuyun."
        />
        <body className="dark" />
      </Helmet>
      <div className={styles.container}>
        <Link to="/#contact" className={styles.backLink}>
          <ArrowLeft size={16} />
          <span>Ana Sayfaya Dön</span>
        </Link>

        <h1 className={styles.title}>Kullanım Şartları</h1>
        <p className={styles.lastUpdated}>Son Güncelleme: 24 Ağustos 2024</p>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>1. Şartların Kabulü</h2>
          <p className={styles.text}>
            Mihrapp mobil uygulamasını ("Hizmet") kullanarak, bu Kullanım Şartları'nı ("Şartlar") kabul etmiş olursunuz. Bu Şartlar, sizinle Mihrapp arasındaki yasal olarak bağlayıcı bir sözleşmedir. Hizmetimize erişerek veya kullanarak, bu Şartlara uymayı kabul edersiniz. Eğer bu Şartları kabul etmiyorsanız, Hizmeti kullanmamalısınız.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>2. Kullanıcı Sorumlulukları</h2>
          <p className={styles.text}>
            Hizmeti kullanırken aşağıdaki sorumlulukları kabul edersiniz:
          </p>
          <ul className={styles.list}>
            <li>Doğru ve güncel kayıt bilgileri sağlamak.</li>
            <li>Hesap bilgilerinizin ve şifrenizin güvenliğini sağlamak.</li>
            <li>Hizmeti yalnızca yasal ve bu Şartlara uygun amaçlar için kullanmak.</li>
            <li>Uygulama aracılığıyla paylaştığınız içeriklerden tamamen sorumlu olmak.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>3. Yasaklanmış Faaliyetler</h2>
          <p className={styles.text}>
            Hizmeti kullanırken aşağıdakileri yapmak kesinlikle yasaktır:
          </p>
          <ul className={styles.list}>
            <li>Yasa dışı, taciz edici, tehditkar veya zararlı faaliyetlerde bulunmak.</li>
            <li>Diğer kullanıcıların Hizmeti kullanımını engellemek veya kesintiye uğratmak.</li>
            <li>Virüs veya diğer zararlı kodları yaymak.</li>
            <li>Hizmetin altyapısına makul olmayan bir yük bindirmek.</li>
            <li>Tersine mühendislik yapmak, kaynak kodunu çözmek veya Hizmetin herhangi bir bölümünü kopyalamak.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>4. Fikri Mülkiyet</h2>
          <p className={styles.text}>
            Hizmet ve içeriği (metinler, grafikler, logolar, ikonlar ve yazılımlar dahil ancak bunlarla sınırlı olmamak üzere) Mihrapp'a veya lisans verenlerine aittir ve telif hakkı, ticari marka ve diğer fikri mülkiyet yasalarıyla korunmaktadır. Size, Hizmeti yalnızca kişisel ve ticari olmayan kullanımınız için kullanmanız amacıyla sınırlı, devredilemez ve münhasır olmayan bir lisans veriyoruz.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>5. Sorumluluğun Sınırlandırılması</h2>
          <p className={styles.text}>
            Mihrapp, Hizmetin kullanımından kaynaklanan doğrudan, dolaylı, arızi, özel veya sonuç olarak ortaya çıkan zararlardan (veri kaybı veya kar kaybı dahil) sorumlu tutulamaz. Hizmet "olduğu gibi" ve "mevcut olduğu şekilde" sunulmaktadır ve doğruluğu, güvenilirliği veya kesintisiz çalışacağı konusunda hiçbir garanti vermemekteyiz.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>6. Şartlarda Değişiklikler</h2>
          <p className={styles.text}>
            Bu Kullanım Şartları'nı zaman zaman kendi takdirimize bağlı olarak değiştirme veya güncelleme hakkını saklı tutarız. Değişiklikler bu sayfada yayınlandığı andan itibaren geçerli olacaktır. Değişikliklerden sonra Hizmeti kullanmaya devam etmeniz, güncellenmiş Şartları kabul ettiğiniz anlamına gelir.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>7. İletişim</h2>
          <p className={styles.text}>
            Bu Kullanım Şartları ile ilgili herhangi bir sorunuz varsa, lütfen bizimle iletişime geçin:
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

export default TermsOfServicePage;