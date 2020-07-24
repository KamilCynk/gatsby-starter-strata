import React from 'react'
import Helmet from 'react-helmet'

import Gallery from '../components/Gallery'
import Layout from '../components/layout'

const HomeIndex = () => {
  const siteTitle = 'rychbud.pl - Ryszard Mierszwa'
  const siteDescription = 'Usługi remontowo - wykończeniowe'

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>

      <div id="main">
        <section id="one">
          <header className="major">
            <h2>
              O firmie
            </h2>
          </header>
          <p>
            Firma Rychbud - Ryszard Mierzwa ma wieloletnie doświadczenie w branży remontowo – wykończeniowej. <br /> <br />
	  
	    Realizujemy zamówienia zarówno od osób prywatnych (wykończenia i remonty domów mieszkalnych)<br /> 
	    jak i od właścicieli przedsiębiorstw (prace w sklepach i zakładach). 
	    Podejmujemy się zleceń według projektu architekta lub według pomysłu zleceniodawcy. <br />

          
	    <br />Usługi: <br /><br />

	    - Układanie płytek ceramicznych w różnych formatach <br />

	    - Układanie kamienia naturalnego (np. granit,marmur,piaskowiec) <br />

            - Układanie mozaiki <br />

	    - Układanie kamienia elewacyjnego, kamienia dekoracyjnego <br />

	    - Biały montaż <br />

	    - Zabudowy wanny, geberitów <br />

	    - Murowanie ścianek działowych <br />

	    - Przygotowywanie pomieszczeń do wykonywania pracy <br />

	    <br /> Świadczymy usługi na terenie Łańcuta i okolic oraz na terenie powiatów: <br /><br />

            - Łańcuckiego<br />

            - Przeworskiego<br />

            - Rzeszowskiego<br /><br />

            Wszystkie prace wykonujemy wykorzystując sprawdzone materiały wysokiej jakości. <br /><br />
	    Wstępną wycenę i kosztorys ofertowy, w oparciu o podany przez inwestora zakres robót wykonujemy bezpłatnie.
	    Zapraszam do zapoznania się z naszymi realizacjami.



          </p>
        </section>

        <section id="two">
          <h2>Realizacje</h2>
          <Gallery />
        </section>

        <section id="three">
          <p>
          </p>
          <div className="row">
            <div className="8u 12u$(small)">
              <form method="post" action="#">
                <div className="row uniform 50%">
                  <div className="6u 12u$(xsmall)">
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default HomeIndex
