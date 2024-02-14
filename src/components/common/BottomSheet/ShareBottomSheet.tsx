import React, { useState } from 'react';
import * as S from './ShareBottomSheet.styled';
import shareViaKakaoImg from 'assets/icons/icon-kakaotalk.svg';
import shareViaLinkImg from 'assets/icons/icon-share-link.svg';
import ReactGA from 'react-ga4';

declare global {
  interface Window {
    Kakao: any;
  }
}

type Props = {
  handleModalClose: React.MouseEventHandler<HTMLDivElement>;
  isPollPage?: boolean;
  isFirstPlace?: boolean;
};

export default function ShareBottomSheet(props: Props) {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const urlToCopy: string = window.location.href;

  const handleCopyClick = async (): Promise<void> => {
    let labelValue: string;

    if (props.isPollPage) {
      labelValue = '투표하기 화면';
    } else if (props.isFirstPlace) {
      labelValue = '투표 결과 화면(1등)';
    } else {
      labelValue = '투표 결과 화면(전체)';
    }

    ReactGA.event({
      category: 'click',
      action: '모달_url_공유',
      label: labelValue,
    });

    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(urlToCopy);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = urlToCopy;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 3000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const shareKakao = () => {
    if (props.isPollPage) {
      ReactGA.event({
        category: 'click',
        action: '모달_카카오톡_공유',
        label: '투표하기 화면',
      });
    } else {
      ReactGA.event({
        category: 'click',
        action: '모달_카카오톡_공유',
        label: '투표 결과 화면',
      });
    }
    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: '오늘의 메뉴',
        description: '메뉴 추천받고 오늘 당기는 음식을 골라봐요',
        imageUrl:
          'https://lh3.googleusercontent.com/fife/AK0iWDz9Z2y_Y2sduUpqDp5yvOYQgPBZkJODMb3OBDzGMtzVqovvqUAyATvfHgqdfcBwTqXtVoW0iA_O76EtyvltDrOtTahy3N4O2n_MKxNOmjGAemE_JeNNkuYNeENRoeYCLd17_26Ea_89NGxzJQOc5POqo1Dcnv27PSGRQ7O_movKaVvKRnTXZE_X-5VkKCfJ_Bk0T1qy2owgk8-zj3E975Ffyo-H65H-fQTWeGMn-7SlulA-dY5dBGhdG3O_VAV2uf9MhX1x_zlsH1OY1XvEe9NV_RY98F49HMi6lWa7HOMasf02m07m8LNkd64mZFsdl11L5B3BbfRyXHfK0s7cqYHNBl5mWkNtC63wKJTe1p0vu4YqzzvAuxlVKFlodm4AOuoGtCE0IcGEfLrdXOmfnNr7kdtS21iAVkAQN6O4NDRJuNnmA0Ft9ixHxQXju2MvmbQgCL8_RJdxJ_3gJE6YsTJIHKdfUZJvMZNmfbs-E-ti7M-YzOttVqSZV4dLjPceDVUa6HNtr0XMYp7Uf6lj3wkxZsPQzkQiI-oKZdSSOPsrvzcwLseMV5UXQ8UB_RehA_GJypHS-hvNfDCNXkAT2Ew6oSWL2KX3LMu1_joFKfsej6gWm03q_QrV3DS2YAN6ZBglXk7YxzDU4EHjQD5AD89KXj0EplNk8VfC4R46FJHjDZjs8EgMN2Csvp9OzECTG_22etpcD1DyKZvHvrTsbTiTHdGwsXBlurEh_Fgeu7dW6vlnQPK0ryqEtD7MYu4KugO__yKAP0fssupwjctcVtHW2JHO8Q84xqDaLTnIs3jCnjjYseW43OevzOfBoJI9k4ASp41Spjlcl020aA8g0kRYjQX9eCEFqoQ2RDTMYhDz6q0DtGtpvfS6omEDyZi5Vsq9xZaEVpQ_WCHU1drAvSDNqrOp82d-JOJgYS2d8_oPRvbf6fD97x-BnZHky9By06ofQC2KvsxhMp7zHyAIu1LefBPwNJEWGUVJzE7-vUXyXc8wrCsEMFb0BsB5K0KgOT-5cAefl-VohjGML8EjUpbCBhQaZWIqyECdVooeMLxJvqSfxDEz3TjbUZToF37SBT0PD8CEVFxmgvlSdfV7VCs0zHLIgfBmAIZSZN3xCkcOnCXXMGZMSDuu5j8eSZGtakwXeCV7qGhO966BGVWEsuDT2JO2JdcM60Nqw5oC3PY2x8DWBI8eeR5QgHvrX3Mt9lywEfhGvtZCXNFHBVA4Kq_DYAJHlCkbr641qkvYzc-7Qhcfg8sDhzfUwZcts-NuAvMNW4pSkkxXJw35KdcZL1QrM7R2XIK9145oqsoJwbhuIiyd_NJdiMrsvfWkYqDxwbYw3vQJO5jBVF4mFBPhtlekXWMpiR_z4XuqP3tq9wkGFruNCuRkszOHAh_9YlNZPaWgClFzXcdze_6rwUK7CeOfD97XJpuc61aoTo3qq6wdmKBPXi6Jk0JD9zC8rEy8wlddctcscQHf3dIHeb6x3dps4dHeTb1FlkRZG2gpKRzmHex4Sz5lJW7_TK6lEnJyK41J7CG5iydDHRe0Vgp_=w2782-h1580',
        link: {
          mobileWebUrl: `${urlToCopy}`,
          webUrl: `${urlToCopy}`,
        },
      },
      buttons: [
        {
          title: '오늘의 메뉴 확인하러 가기',
          link: {
            mobileWebUrl: `${urlToCopy}`,
            webUrl: `${urlToCopy}`,
          },
        },
      ],
    });
  };

  return (
    <S.ShareBottomSheet handleModalClose={props.handleModalClose}>
      <ul>
        <li className="shareViaKaKao">
          <button type="button" onClick={shareKakao}>
            <img src={shareViaKakaoImg} alt="share via kakaotalk icon" />
            <p>카카오톡으로 공유하기</p>
          </button>
        </li>
        <span className="line" />
        <li className="shareViaLink">
          <button type="button" onClick={handleCopyClick}>
            <img src={shareViaLinkImg} alt="share via link icon" />
            <p>링크 복사하기</p>
          </button>
        </li>
        {isCopied && <S.CopiedModal>링크가 복사되었습니다!</S.CopiedModal>}
      </ul>
    </S.ShareBottomSheet>
  );
}
