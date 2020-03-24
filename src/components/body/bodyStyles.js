import styled from 'styled-components';


export const BodyContainer = styled.div`
    padding-top: 30px;
    padding-left: 30px;
    padding-right: ${props => props.theme.rightPadding};
    flex: 1;

    .transaction-summary{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-gap: 35px;
        margin-bottom: 50px;

        .transaction{
            background-color: #ffffff;
            border: 1px solid #EEF8FD;
            border-radius: 2px;
            display: flex;
            padding: 20px;

            &__details{
                margin-right: 20px;

                h4{
                    color: #787C90;
                    line-height: 16px;
                }

                h2{
                    color: #262626;
                    line-height: 24px;
                }
            }
        }
    }

    .todays-transaction{
        display: grid;
        grid-template-columns: 70% 30%;
        grid-gap: 5px;
        margin-bottom: 50px;
        

        &__graph{
            background: #FFFFFF;
            border: 1px solid #EEF8FD;
            border-radius: 2px;
            padding: 26px;

            .header{
                display: flex;
            }
        }

        &__details{
            
            display: grid;
            grid-gap: 5px;

            .top{
                background: #FFFFFF;
                border: 1px solid #EEF8FD;
                border-radius: 2px;
                padding: 26px;

            }

            .bottom{
                background: #FFFFFF;
                border: 1px solid #EEF8FD;
                border-radius: 2px;
                padding: 26px;

            }
        }
    }
`;