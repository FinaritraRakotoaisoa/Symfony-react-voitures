<?php
 namespace App\Controller;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends AbstractController
{
    
/**
*@Route("/{reactRouting}", name="home", defaults={"reactRouting": null})
*/

public function index() {
  return $this->render('default/index.html.twig');
}
   
   /**
     * @Route("/api/catalogues", name="catalogues")
     * @return \Symfony\Component\HttpFoundation\JsonResponse
     */
        public function getCatalogues()
    {
        $catalogues = [
            [
                'id' => 1,
                'name' => 'SPRINTER PHASE 4',
                'description' => 'Sprinter phase 4 est un taxi brousse trés populaire maintenant à Madagascar, il est trés rapide et confort parapport au phase au paravant.',
                'imageURL' => 'https://i.ibb.co/GQHmrbM/sprinter.jpg'
            ],
            [
                'id' => 2,
                'name' => 'SPRINTER PHASE 3',
                'description' => 'Sprinter phase 3 est un taxi brousse trés rapide pour le voyage à longue parcours, il est trés rapide parraport au Mazda et aussi trés confort.',
                'imageURL' => 'https://i.ibb.co/N3Wcq4m/sprinter1.jpg'
            ],
            [
                'id' => 3,
                'name' => 'STAREX',
                'description' => 'Starex et H200, est une automobile produite par Hyundai Motors de 1998 à 2008, pour la première génération. Il s agit d un fourgon à six, sept et neuf places qui succède au Hyundai H-100. Il existe en empattements court et long.',
                'imageURL' => 'https://i.ibb.co/Tk0x5k6/starex.jpg'
            ],
            [
                'id' => 4,
                'name' => 'MAZDA TOYOTA',
                'description' => 'MAZDA TOYOTA est une voiture trés rapide que nous utilisons avant l"apparition de la taxibrousse sprinter',
                'imageURL' => 'https://i.ibb.co/ccsNBHH/mazda.jpg'
            ],
            [
                'id' => 5,
                'name' => 'ATOS HYUNDAI',
                'description' => 'La Hyundai Atos est un véhicule construit par la marque sud-coréenne Hyundai. La version originale est créée en 1997, la version Atos Prime à partir de 1999. La production de l"Atos Prime est encore en cours dans les autres pays jusqu"à présent.',
                'imageURL' => 'https://i.ibb.co/SJsfkh0/atos.jpg'
            ]
        ];
    
        $response = new Response();

        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');

        $response->setContent(json_encode($catalogues));
        
        return $response;
    }
     /**
     * @Route("/api/comms", name="comms")
     * @return \Symfony\Component\HttpFoundation\JsonResponse
     */
        public function getComms()
    {
        $comms = [
            [
                'id' => 1,
                'name' => 'SPRINTER PHASE 4',
                'commentaire' => 'Tena tsara be lay Sprinter phase4',
                 'imageURL' => 'https://i.ibb.co/d6v7yMT/personn.png'
            ],
            [
                'id' => 2,
                'name' => 'SPRINTER PHASE 3',
                'commentaire' => 'Milay be le izy e',
                'imageURL' => 'https://i.ibb.co/d6v7yMT/personn.png'
            ],
            [
                'id' => 3,
                'name' => 'STAREX',
                'commentaire' => 'Tsara be lay izy e,prix MP',
                'imageURL' => 'https://i.ibb.co/d6v7yMT/personn.png'
            ],
            [
                'id' => 4,
                'name' => 'MAZDA TOYOTA',
                'commentaire' => 'Bonjour,Prix Mp',
                'imageURL' => 'https://i.ibb.co/d6v7yMT/personn.png'
            ],
            [
                'id' => 5,
                'name' => 'ATOS HYUNDAI',
                 'commentaire' => 'Bonjour,Prix Mp',
                 'imageURL' => 'https://i.ibb.co/d6v7yMT/personn.png'
            ]
        ];
    
        $response = new Response();

        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');

        $response->setContent(json_encode($comms));
        
        return $response;
    }
}
