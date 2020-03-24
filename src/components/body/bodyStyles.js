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
        grid-template-columns: 689px auto;
        grid-gap: 5px;
        margin-bottom: 50px;
        

        &__graph{
            background: #FFFFFF;
            border: 1px solid #EEF8FD;
            border-radius: 2px;
            padding-top: 26px;
            overflow: hidden;
            position: relative;
            display: flex;
            flex-direction: column;


            .header{
                display: flex;
                align-items: center;
                padding-left: 26px;
                padding-right: 26px;
                margin-bottom: 45px;

                h2{
                    font-weight: 700;
                    margin-right: auto;
                }

                .date-range{
                    border: 1px solid #DDE0E3;
                    border-radius: 4.25px;
                    padding: 10px;
                    padding-right: 60px;
                    position: relative;
                    color: #7F8FA4;
                    margin-right: 50px;

                    &:after{
                        content: '';
                        position: absolute;
                        border-left: 1px solid ;
                        border-bottom: 1px solid;
                        width: 7px;
                        height: 7px;
                        transform: rotate(-45deg);
                        top: 14px;
                        right: 12px;
    
                    }
                }

                .directions{

                    &__wrapper{
                        display: inline-flex;
                        border: 1px solid #CCCFD4;
                        border-radius: 4px;
                        padding: 0.3px 4px;

                        &:first-child{
                            margin-right: 10px;
                        }

                        span{
                            border: 1px solid #27AE60;
                            width: 23px;
                            height: 23px;
                            background-color: transparent;
                            display: inline-block;
                            position: relative;
    
                            &:after{
                                content: '';
                                position: absolute;
                                border-left: 2px solid #CCCFD4;
                                border-bottom: 2px solid #CCCFD4;
                                width: 8px;
                                height: 8px;
                                top: 6px;
                                left: 8px;
                                opacity: 0.8;
                            }
                        }
    
                        .left-direction{
    
                            &:after{
                                content: '';
                                transform: rotate(45deg);
                            }
                        }
                        
                        .right-direction{
    
                            &:after{
                                content: '';
                                transform: rotate(-135deg);
                                left: 5px !important;
                            }
    
                        }
                    }

                    
                }
            }

            .header + div{
                flex: 1;

                .month-wrapper{
                    display: flex;
                    height: 86%;
    
                    .month{
                        flex: 1;
                        display: flex;
                        justify-content: center;
                        border-right: 1px solid #CFE8FB;
                        font-weight: 600;
    
                        &:last-child{
                            border-right: none;
                        }
                    }
                }
    
                .gradient-img{
                    position: absolute;
                    bottom: 0;
                }

            }
        }

        &__details{
            
            display: grid;
            grid-gap: 5px;
            grid-auto-rows: 1fr;

            .top{
                background: #FFFFFF;
                border: 1px solid #EEF8FD;
                border-radius: 2px;
                padding: 26px;

                .progress-bar{
                    width: 100%;
                    height: 4px;
                    background-color: green;
                    margin-bottom: 12px;
                    border-radius: 10px;
                }

                .title{
                    font-weight: 700;
                }

                h3{
                    margin-bottom: 12px;

                    .yellow{
                        color: #ebc315;
                        font-weight: 700;
                    }
                    
                    .green{
                        color: #27ae60;
                        font-weight: 700;
                    }
                    
                    .blue{
                        color: #1860ec;
                        font-weight: 700;
                    }
                }

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