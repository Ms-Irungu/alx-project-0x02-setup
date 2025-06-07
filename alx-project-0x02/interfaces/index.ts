export interface CardProps {
    title: string;
    content: string;
}

export interface PostModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (data: CardProps) => void
}

export interface ButtonProps {
    size?: 'small' | 'medium' | 'large';
    shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full';
    children: React.ReactNode;
    onClick?: () => void;
}

export interface PostProps{
    userId: number;
    title: string;
    content: string;
}

export interface ApiPost{
    userId: number;
    id: number;
    title: string;
    body: string; // Use 'body' as 'content'
}