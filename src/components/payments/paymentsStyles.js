import styled from 'styled-components';

export const PaymentsContainer = styled.div`
    margin-bottom: 50px;
    
    h1{
        font-size: 36px;
        font-weight: 400;
        color: #262626;
        margin-bottom: 22px;
    }

    .payments-nav{
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;

        h3{
            font-size: 13px;
            color: #262626;
            flex: 1;

            .payment-numbers{
                color: #1875F0;
                position: relative;
                margin-right: 25px;
                margin-left: 15px;

                &:after{
                    content: '';
                    position: absolute;
                    border-left: 1px solid ;
                    border-bottom: 1px solid;
                    width: 7px;
                    height: 7px;
                    transform: rotate(-45deg);
                    top: 3px;
                    right: -12px;

                }
            }
        }

        .search-field{
            flex: 1;
            display: flex;
            align-items: center;
            padding-bottom: 5px;
            border-bottom: 0.5px solid #979797;

            img{
                margin-right: 15px;
            }

            input{
                border: none;
                font-size: 12px;
                outline: none;
                background-color: transparent;

                ::placeholder{
                    color: #979797;
                }
            }
        }

        .options-section{
            padding-left: 80px;
        }
    }

    table{
        width: 100%;
        border-spacing: 0;

        .table-heading{
            background-color: #EAEEF0;
            color: #7F8FA4;

            th{
                font-size: 14px;
                font-weight: 300;
                text-align: left;
                padding-top: 10px;
                padding-bottom: 10px;

                &:first-child{
                    padding-left: 26px;
                }
            }
        }

        .table-row{
            background-color: #ffffff;

            td{
                padding-top: 15px;
                padding-bottom: 15px;
                color: #7F8FA4;

                &:first-child{
                    color: #414042;
                    padding-left: 26px;
                }
            }

            .acronym{
                color: #ffffff;
                background-color: #7F8FA4;
                border-radius: 50%;
                height: 36px;
                width: 36px;
                display: inline-flex;
                justify-content: center;
                align-items: center;
                font-size: 12px;
                margin-right: 26px;
            }

            .status{
                display: inline-block;
                border: 1px solid #CCCFD4;
                border-radius: 20px;
                width: 135px;
                padding: 10px 15px;
                font-size: 12px;

                .bullet-point{
                    width: 9px;
                    height: 9px;
                    background-color: blue;
                    border-radius: 50%;
                    display: inline-block;
                    margin-right: 10px;
                }
            }

            .dropdown{
                border: 1px solid #27AE60;
                width: 27px;
                height: 27px;
                background-color: transparent;
                display: inline-block;
                position: relative;

                &:after{
                    content: '';
                    position: absolute;
                    border-left: 2px solid ;
                    border-bottom: 2px solid;
                    width: 8px;
                    height: 8px;
                    transform: rotate(-45deg);
                    top: 7px;
                    left: 8px;
                    opacity: 0.8;
                }
            }
        }

        .border-bottom{
            height: 1px;

            td{
                background-color: #CCCFD4;
            }

            &:last-child{
                display: none;
            }
        }
    }
`;