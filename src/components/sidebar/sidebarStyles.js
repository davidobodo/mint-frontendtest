import styled from 'styled-components';


export const SidebarContainer = styled.div`
    color: #647787;
    
    padding-top: 33px;
    background-color: #ffffff;
    width: 260px;
    min-height: 100vh;

    .btn-invoice{
        text-transform: uppercase;
        color: #ffffff;
        background-color: #27AE60;
        border-radius: 30px;
        font-size: 12px;
        padding: 10px 30px;
        border: none;
        margin-bottom: 32px;
        margin-left: 42px;
        outline: none;
    }

    section{
        margin-bottom: 32px;

        h5{
            margin-bottom: 15px;
            padding-left: ${props => props.theme.leftPadding};
        }

        li{
            display: flex;
            align-items:center;
            font-size: 11px;
            font-weight: 300;
            list-style: none;
            padding-left: ${props => props.theme.leftPadding};
            padding-top: 10px;
            padding-bottom: 10px;

            img{
                width: 19px;
                margin-right: 15px;
            }
        }
    }

    .active-link{
        background-color: rgba(24, 117, 240, 0.1);
        border-left: 3px solid rgba(24, 117, 240);
    }

`;