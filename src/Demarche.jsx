import {motion} from 'framer-motion'
export function Demarche(){
return(
    <>
    <ActionsSection />
    </>
)
}

const ActionsSection = () => {
    const actions = [
      {
        title: 'Nous luttons contre le gaspillage',
        description: 'En récupérant des échantillons et des dons de produits de cosmétique et d’hygiène.',
        image: './assets/trash.png',

      },
      {
        title: 'Nous créons des trousses fait maison',
        description: 'Nos super bénévoles créent des pochons et des trousses pour mettre les produits dedans.',
        image: './assets/undraw_travelers_kud9.svg',
      },
      {
        title: 'Nous distribuons ces trousses',
        description: 'Dans les foyers pour femmes, les centres d’hébergements, les structures d’accueil de jour et auprès d’associations.',
        image: './assets/Learning-pana.svg',
      },
    ];
  
    return (
      <div className="actions-section">
        <motion.div    className="actions_grid">
          {actions.map((action, index) => (
            <motion.div 
            key={index}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.8 }}
            transition={{
              type: 'spring',
              duration: 1,
              delay: index * 0.4, // apparition décalée
            }}
            className="action_item">
             <div className="actions_grid_item">
             <img src={action.image} alt="" className="action_image" />
             </div>
              <h3 className="action-title">{action.title}</h3>
              <p className="action-description">{action.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    );
  };  
  