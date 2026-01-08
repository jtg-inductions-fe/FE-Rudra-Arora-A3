import { useNavigate } from 'react-router-dom';

import { Button, Card, CardActions, CardContent } from '@mui/material';

import { ContentStack } from './InfoCard.styles';
import { InfoCardProps } from './InfoCard.types';
import { InfoRow } from '../InfoRow';
import { Typography } from '../Typography';

const InfoCard = ({
    title,
    subtitle1,
    subtitle2,
    buttonText,
    buttonUrl,
    subtitle3,
    id,
    INFO_CARD_CONSTANTS,
}: InfoCardProps) => {
    const navigate = useNavigate();
    return (
        <Card>
            <CardContent>
                <Typography variant="h2">{title}</Typography>
                <Typography variant="h2">{subtitle1}</Typography>

                <ContentStack>
                    <InfoRow
                        label={INFO_CARD_CONSTANTS.KEY1}
                        value={String(id)}
                    />
                </ContentStack>

                <ContentStack>
                    <InfoRow
                        label={INFO_CARD_CONSTANTS.KEY2}
                        value={subtitle2}
                    />
                </ContentStack>

                <ContentStack>
                    <InfoRow
                        label={INFO_CARD_CONSTANTS.KEY3}
                        value={subtitle3}
                    />
                </ContentStack>
            </CardContent>
            {buttonText && buttonUrl && (
                <CardActions>
                    <Button
                        onClick={() => void navigate(buttonUrl)}
                        variant="contained"
                    >
                        {buttonText}
                    </Button>
                </CardActions>
            )}
        </Card>
    );
};

export default InfoCard;
