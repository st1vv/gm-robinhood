import { ConnectButton } from "@rainbow-me/rainbowkit";
import { StandartButton } from "@/shared/standard-button";

export const WalletButton = () => {
  return (
    <ConnectButton.Custom>
      {({ account, openConnectModal, openAccountModal, mounted }) => {
        if (!mounted) return null;

        if (!account) {
          return (
            <StandartButton variant="primary" onClick={openConnectModal}>
              Connect wallet
            </StandartButton>
          );
        }

        return (
          <StandartButton variant="secondary" onClick={openAccountModal}>
            {account.displayName}
          </StandartButton>
        );
      }}
    </ConnectButton.Custom>
  );
};
