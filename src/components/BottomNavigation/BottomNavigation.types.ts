import { SvgIconComponent } from '@mui/icons-material';

export interface NavConfigType {
    label: string;
    icon: SvgIconComponent;
    to: string;
}

export type BottomNavigationProps = {
    NavConfig: NavConfigType[];
};
