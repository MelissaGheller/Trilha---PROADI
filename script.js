const casas = [

  /*0*/ { background: "img/fundo-capa.png", tipo: "descricao"}, 
  /*1*/ { background: "img/fundo-integrantes.png" , tipo: "descricao" },

  /*2*/ { background: "img/fundo-parcerias.png" , tipo: "descricao" },
  /*3*/ { background: "img/fundo-proadi.png" , tipo: "descricao" },
  /*4*/ { background: "img/fundo-hmv.png" , tipo: "descricao" },

  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },

  /*5*/ { background: "img/fundo-Proadi-hmv.png" , tipo: "descricao" },
  /*6*/ { background: "img/fundoEscritorioo.png" , tipo: "descricao" },
  /*7*/ { background: "img/fundo-projetos.png" , tipo: "descricao" },
  /*8*/ { background: "img/fundo-indicadores-graficos.png" , tipo: "descricao" },
  /*9*/ { background: "img/fundo-indicadores.png" , tipo: "descricao" },
  /*10*/{ background: "img/fundo-escritorio.png" , tipo: "descricao" },
  /*11*/{ background: "img/fundo-apresentacao.png", tipo: "descricao" },

  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },

  /*12*/ { background: "img/fundo/projeto-gestao-hospitalar.png", video:"https://www.youtube.com/watch?v=4yg0L9vBS2c",  tipo: "projeto" },

  /*13*/ { titulo: "Tá certo isso?", pergunta: "O projeto Gestão Hospitalar RS é focado exclusivamente na gestão financeira de hospitais?", resposta: false, explicacao: "O projeto abrange aspectos administrativos e assistenciais, não apenas financeiros.", tipo: "pergunta" },


  /*14*/ { background:"img/fundo-lean-nas-emergencias.png", tipo: "projeto"  },

  /*15*/ { titulo: "Tá certo isso?", pergunta: "O projeto LEANS é focado exclusivamente na gestão financeira de hospitais?", resposta: false, explicacao: "O projeto abrange aspectos administrativos e assistenciais, não apenas financeiros.", tipo: "pergunta" },

  /*16*/ { background:"img/fundo/projeto-cardiopatia-congenita.png",video:"https://www.youtube.com/watch?v=he8cB1eDdMM",  tipo: "projeto"  },
  
  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  
  /*17*/ { titulo: "Tá certo isso?", pergunta: "O projeto RHP aborda padrões de cuidado em redes hospitalares?", resposta: true, explicacao: "O projeto estuda redes hospitalares e padrões de cuidado.", tipo: "pergunta" },


  /*18*/ { background:"img/fundo/projeto-saude-em-nossa-maos.png", titulo: "", conteudo: "", video:"https://www.youtube.com/watch?v=KXgYEJYcOeQ",  tipo: "projeto"  },

  /*19*/ { titulo: "Tá certo isso?", pergunta: "O projeto ATS Educação capacita gestores apenas para gestão financeira?", resposta: false, explicacao: "O projeto aborda avaliação de tecnologias em saúde e não se limita à gestão financeira.", tipo: "pergunta" },

  /*20*/ { background: "img/fundo/projeto-ats-educação.png", titulo: "", conteudo: "", video:"https://www.youtube.com/watch?v=7mvu2ebAU8E",  tipo: "projeto"},

  /*23*/ { titulo: "Tá certo isso?", pergunta: "O projeto Preceptoria Médica forma apenas profissionais de enfermagem?", resposta: false, explicacao: "O projeto é voltado à formação de novos médicos.", tipo: "pergunta" },

  /*22*/ { background:"img/fundo/projeto-preceptoria-medica.png",titulo: "", conteudo: "", video:"https://www.youtube.com/watch?v=WA6BLGVNN14",  tipo: "projeto"  },


  /*19*/ { titulo: "Tá certo isso?", pergunta: "O projeto Saúde em nossas Mãos trata de agricultura familiar?", resposta: false, explicacao: "O projeto foca na segurança e qualidade no atendimento hospitalar.", tipo: "pergunta" },

  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },

  /*24*/ {background:"img/fundo-preceptoria-mfc.png", titulo: "", conteudo: "", video: "/img/videoteste.mp4",  tipo: "projeto"  },
  /*25*/ { titulo: "Tá certo isso?", pergunta: "O projeto MFC bla bla bla?", resposta: false, explicacao: "O projeto é voltado à formação de novos médicos.", tipo: "pergunta" },

  /*26*/ {background:"img/fundo-preceptoria-multi.png", titulo: "", conteudo: "", video: "/img/videoteste.mp4",  tipo: "projeto" },
  /*27*/ { titulo: "Tá certo isso?", pergunta: "O projeto Preceptoria Multiprofissional envolve apenas médicos?", resposta: false, explicacao: "O projeto promove a formação em equipes multiprofissionais.", tipo: "pergunta" },

  /*28*/ {background:"img/fundo/projeto-saude-indigena.png", titulo: "", conteudo: "",  tipo: "projeto"  },

  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },

  /*29*/ { titulo: "Tá certo isso?", pergunta: "O projeto Saúde Indígena busca integrar as tradições indígenas ao atendimento em saúde?", resposta: true, explicacao: "O projeto promove ações específicas para populações indígenas, respeitando suas tradições.", tipo: "pergunta" },


  /*30*/ {background:"img/fundo/projeto-artemis.png", titulo: "", conteudo: "", video:"https://www.youtube.com/watch?v=X2WEOnF5mao",  tipo: "projeto"  },

  /*31*/ { titulo: "Tá certo isso?", pergunta: "Diretrizes bla bla bla?", resposta: false, explicacao: "O estudo é direcionado para doenças crônicas, não agudas.", tipo: "pergunta" },

  /*32*/ {background:"img/fundo/projeto-diretrizes.png", titulo: "", conteudo: "", video:"https://www.youtube.com/watch?v=oNKqp0AP9_o",  tipo: "projeto"  },

  /*33*/ { titulo: "Tá certo isso?", pergunta: "O Estudo CuidAR é voltado para doenças respiratórias agudas?", resposta: false, explicacao: "O estudo é direcionado para doenças crônicas, não agudas.", tipo: "pergunta" },
  /*34*/ { titulo: "Projeto Estudo CuidAR", conteudo: "Estudo sobre intervenções que melhoram a qualidade de vida de pacientes com doenças crônicas.", video: "/img/videoteste.mp4",  tipo: "projeto"  },

  /*31*/ { titulo: "Tá certo isso?", pergunta: "O projeto Artemis está relacionado à transformação digital na saúde?", resposta: true, explicacao: "O projeto Artemis promove transformação digital na saúde.", tipo: "pergunta" },

  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },

  /*19*/ { titulo: "Estudo HTLV (PRISMA)", conteudo: "alterar texto.", video: "/img/videoteste.mp4",  tipo: "projeto"  },
  /*31*/ { titulo: "Tá certo isso?", pergunta: "Estudo HTLV (PRISMA) alerar pergunta?", resposta: true, explicacao: "O projeto Artemis promove transformação digital na saúde.", tipo: "pergunta" },

  /*19*/ { titulo: "Projeto Estudo Otimo", conteudo: "alterar texto.", video: "/img/videoteste.mp4",  tipo: "projeto"  },
  /*31*/ { titulo: "Tá certo isso?", pergunta: "Estudo otimo alerar pergunta?", resposta: true, explicacao: "O projeto Artemis promove transformação digital na saúde.", tipo: "pergunta" },

  /*19*/ {background:"img/fundo/projeto-onco-genomas.png", titulo: "", conteudo: "", video:"https://www.youtube.com/watch?v=wOkTcLAxYPQ",  tipo: "projeto"  },

  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },

  /*39*/ { titulo: "Tá certo isso?", pergunta: "O projeto Onco-Genomas Brasil analisa tratamentos personalizados para câncer?", resposta: true, explicacao: "O projeto estuda o perfil genético de cânceres no Brasil.", tipo: "pergunta" },

  /*21*/ {background:"img/fundo/projeto-physiosync.png", titulo: "", conteudo: "", video:"https://www.youtube.com/watch?v=Atw5AdfzTm8",  tipo: "projeto"  },

  /*40*/ { titulo: "Tá certo isso?", pergunta: "O projeto Pós-Covid Brasil estuda apenas os impactos físicos da Covid-19?", resposta: false, explicacao: "O estudo avalia os impactos físicos, mentais e sociais.", tipo: "pergunta" },
  /*20*/ { titulo: "Projeto Pós-Covid Brasil", conteudo: "Iniciativa que investiga os impactos a longo prazo da Covid-19 na saúde dos brasileiros.",  video: "/img/videoteste.mp4",  tipo: "projeto" },
  /*22*/ { titulo: "Projeto PROMOTE", conteudo: "Pesquisa que explora melhorias em reabilitação para pacientes em ventilação mecânica prolongada.", video: "/img/videoteste.mp4",  tipo: "projeto" },



  /*41*/ { titulo: "Tá certo isso?", pergunta: "O projeto PhysioSync-HF Follow-UP monitora pacientes com insuficiência cardíaca?", resposta: true, explicacao: "O projeto avalia um sistema de monitoramento remoto para esses pacientes.", tipo: "pergunta" },

  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },


  /*28*/ {background:"img/fundo/projeto-rehab-vm.png", titulo: "", conteudo: "", video:"https://www.youtube.com/watch?v=KUPtzfuNgH0",  tipo: "projeto"  },

  /*47*/ { titulo: "Tá certo isso?", pergunta: "O projeto Rehab-VM Brasil é voltado à reabilitação de pacientes com doenças respiratórias leves?", resposta: false, explicacao: "O projeto foca na reabilitação de pacientes em ventilação mecânica prolongada.", tipo: "pergunta" },

  /*23*/ { titulo: "Projeto Resilient-TNK", conteudo: "Estudo que investiga novas abordagens para doenças cardiovasculares em populações de alto risco.", video: "/img/videoteste.mp4",  tipo: "projeto"  },
  /*47*/ { titulo: "Tá certo isso?", pergunta: "O Projeto TNK alterar pergunta?", resposta: false, explicacao: "O projeto foca na reabilitação de pacientes em ventilação mecânica prolongada.", tipo: "pergunta" },


  /*26*/ { titulo: "Projeto TB PED", conteudo: "Estudo voltado ao diagnóstico e tratamento da tuberculose pediátrica.", video: "/img/videoteste.mp4",  tipo: "projeto"  },

  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },


  /*45*/ { titulo: "Tá certo isso?", pergunta: "O projeto TB PED é voltado ao tratamento da tuberculose pediátrica?", resposta: true, explicacao: "O projeto foca no diagnóstico e tratamento da tuberculose pediátrica.", tipo: "pergunta" },

  /*33*/ { titulo: "Projeto TeleNordeste", conteudo: "Iniciativa que utiliza telemedicina para expandir o acesso à saúde no Nordeste do Brasil.", video: "videos/Gabriela.mp4",  tipo: "projeto"  },

  /*43*/ { titulo: "Tá certo isso?", pergunta: "O projeto VigiaSUS trata de agricultura sustentável?", resposta: false, explicacao: "O projeto é focado na vigilância em saúde e monitoramento de doenças emergentes.", tipo: "pergunta" },

  /*24*/ { titulo: "Projeto VigiaSUS", conteudo: "Iniciativa para fortalecer a vigilância em saúde e monitorar doenças emergentes.", video: "/img/videoteste.mp4",  tipo: "projeto"  },

  /*46*/ { titulo: "Tá certo isso?", pergunta: "O projeto Trident é voltado a diagnósticos mais rápidos?", resposta: true, explicacao: "O projeto busca avanços tecnológicos para diagnósticos rápidos e precisos.", tipo: "pergunta" },

  /*27*/ { titulo: "Projeto Trident", conteudo: "Iniciativa que busca avanços tecnológicos para diagnósticos mais rápidos e precisos.", video: "/img/videoteste.mp4",  tipo: "projeto"  },

  /*51*/ { titulo: "Tá certo isso?", pergunta: "O projeto TeleNordeste utiliza telemedicina para ampliar o acesso à saúde?", resposta: true, explicacao: "O projeto utiliza telemedicina para expandir o acesso à saúde no Nordeste do Brasil.", tipo: "pergunta" },

];

document.querySelectorAll('.casa').forEach((casa, index) => {
  if (casa.classList.contains('casaVazia') || index >= casas.length) {
    return; 
  }

  const dadosCasa = casas[index];


  casa.addEventListener('click', () => {
    if (!dadosCasa) return; 

    const carta = document.getElementById('carta');
    const tituloCarta = document.getElementById('titulo');
    const conteudoCarta = document.getElementById('conteudo');
    const botoesPergunta = document.getElementById('botoes-pergunta');
    const videoArea = document.getElementById('video-area');
    const videoFrame = document.getElementById('video-frame');
    const nomes = document.getElementById('nomes');
    const resultado = document.getElementById('resultado');

    tituloCarta.textContent = dadosCasa.titulo;
    conteudoCarta.textContent = dadosCasa.conteudo || "";
    botoesPergunta.style.display = 'none';
    videoArea.style.display = 'none';
    nomes.style.display = 'none';

 
    if (dadosCasa.background) {
      carta.style.backgroundImage = `url(${dadosCasa.background})`;
      carta.style.backgroundSize = "Cover"
      carta.style.backgroundAttachment = "fixed";
      carta.style.backgroundPosition = "top center";
      carta.style.backgroundRepeat = "no-repeat";
      carta.style.backgroundSize = "100% 100%";

    } else {
      carta.style.background = "white"; 
    }

    if (dadosCasa.tipo === 'projeto' && dadosCasa.video) {
      videoArea.style.display = 'block';
      if (dadosCasa.video.includes("youtube.com") || dadosCasa.video.includes("youtu.be")) {
        videoFrame.src = dadosCasa.video.replace("watch?v=", "embed/");
    } else {
        videoFrame.src = dadosCasa.video;
    }

    } else if (dadosCasa.tipo === 'pergunta') {
      conteudoCarta.textContent = dadosCasa.pergunta;
      botoesPergunta.style.display = 'block';

      window.responder = (respostaUsuario) => {
        resultado.textContent = respostaUsuario === dadosCasa.resposta
          ? `Correto! ${dadosCasa.explicacao}`
          : `Errado. ${dadosCasa.explicacao}`;
          
      };
    }

    carta.style.display = 'block';
  });
});


window.fecharCarta = () => {
  const carta = document.getElementById('carta');
  carta.style.display = 'none';
  carta.style.background = "white"; 
  document.getElementById('resultado').textContent = '';
  document.getElementById('video-frame').src = "about:blank"; 
};
