import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Impressum | Bloom',
  robots: { index: false, follow: false }, // Usually best not to index legal pages
};

export default function LegalNoticePage() {
  return (
    <div className="container mx-auto px-6 py-12 pt-28 md:px-12 lg:px-20">
      <h1 className="text-3xl font-bold mb-6">Impressum</h1>
      <div className="prose max-w-none">
        <h2>Informationen nach § 5 TMG</h2>
        <p>
          Menta Health GmbH<br />
          Kolonnenstr. 8<br />
          10827 Berlin
        </p>
        <p>
          Handelsregister: HRB 224991 B<br />
          Registergericht: Berlin-Charlottenburg
        </p>
        <p>Vertreten durch: Viktoria Lindner, Leonie Ellerbrock</p>

        <h2>Kontakt</h2>
        <p>hello@getbloom.work</p>

        <h2>Verbraucherstreitbeilegung/Universelle Schlichtungsstelle</h2>
        <p>Wir sind nicht bereit oder verpflichtet, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>

        <h2>Haftung für Inhalte</h2>
        <p>Als Dienstleister sind wir gemäß § 7 Abs.1 TMG für unsere eigenen Inhalte auf dieser Seite nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Dienstleister jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>

        <h2>Haftung für Links</h2>
        <p>Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben, weshalb wir für diese fremden Inhalte auch keine Gewähr übernehmen können. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>

        <h2>Urheberrecht</h2>
        <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen. Quelle: eRecht24</p>

        <h2>EU-Streitbeilegung</h2>
        <p>Wir möchten Sie gemäß der Verordnung über Online-Streitbeilegung in Verbraucherangelegenheiten (OS-Verordnung) über die Online-Streitbeilegungs-Plattform (OS-Plattform) informieren.Verbraucher haben die Möglichkeit, Beschwerden bei der Online-Streitbeilegungs-Plattform der Europäischen Kommission einzureichen. Die notwendigen Kontaktdaten finden Sie oben in unserem Impressum. Wir weisen jedoch darauf hin, dass wir nicht bereit oder verpflichtet sind, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>

        <h2>Haftung für die Inhalte dieser Website</h2>
        <p>Wir entwickeln die Inhalte dieser Website ständig weiter und sind bestrebt, genaue und aktuelle Informationen bereitzustellen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Informationen, die wir zur Nutzung bereithalten, nach den allgemeinen Gesetzen verantwortlich. Für die Richtigkeit aller Inhalte dieser Website, insbesondere für die von Dritten bereitgestellten Inhalte, können wir leider keine Gewähr übernehmen. Als Diensteanbieter im Sinne der §§ 8 bis 10 sind wir nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben auch im Falle unserer Nichtverantwortlichkeit nach den §§ 8 bis 10 unberührt. Sollten Sie auf problematische oder rechtswidrige Inhalte aufmerksam werden, bitten wir Sie, sich umgehend mit uns in Verbindung zu setzen, damit wir die rechtswidrigen Inhalte entfernen können. Die Kontaktdaten finden Sie im Impressum.</p>

        <h2>Haftung für Links auf dieser Website</h2>
        <p>Unsere Website enthält Links zu anderen Websites, für deren Inhalt wir nicht verantwortlich sind. Wir haften nicht für die Inhalte der verlinkten Seiten, da wir keine Kenntnis von rechtswidrigen Handlungen hatten und haben, uns bisher keine derartigen Rechtsverstöße aufgefallen sind und wir bei Bekanntwerden von Rechtsverstößen die Links sofort entfernen würden. Wenn Sie rechtswidrige Links auf unserer Website feststellen, nehmen Sie bitte Kontakt mit uns auf. Die Kontaktdaten finden Sie im Impressum.</p>

        <h2>Kommunikationsstelle für rechtswidrige Inhalte nach dem Digital Services Act</h2>
        <p>Die Meldung rechtswidriger Inhalte erfolgt gem. unserer "Regelungen zum Digital Services Act" an: hello@getbloom.work.</p>

        <h2>Urheberrechtshinweis</h2>
        <p>Alle Inhalte dieser Website (Bilder, Fotos, Texte, Videos) unterliegen dem Urheberrecht der Bundesrepublik Deutschland. Bitte fragen Sie uns, bevor Sie die Inhalte dieser Website verbreiten, vervielfältigen oder verwerten, z.B. auf anderen Websites veröffentlichen. Falls Sie auf dieser Website Inhalte finden, die gegen das Urheberrecht verstoßen, bitten wir Sie, uns zu kontaktieren.</p>

        <h2>Bildrechte</h2>
        <p>Bilder, Fotos und Grafiken auf dieser Website sind urheberrechtlich geschützt, die Bildrechte liegen bei den folgenden Fotografen und Unternehmen: Unsplash</p>
      </div>
    </div>
  );
} 