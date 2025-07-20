import { toast as sonnerToast } from "sonner";

type ToastOptions = {
  title: string;
  description?: string;
};

export const useToast = () => {
  const toast = ({ title, description }: ToastOptions) => {
    sonnerToast(title, {
      description,
    });
  };

  return { toast };
};